// js/progress.js

// Save quiz result to Firestore
async function saveQuizResult(moduleId, score, total) {
  const user = auth.currentUser;
  if (!user) {
    showToast('Sign in with Google to save your quiz scores!', 'error');
    return;
  }
  
  try {
    const docRef = db.collection('users').doc(user.uid).collection('quizResults').doc(moduleId);
    const existing = await docRef.get();
    
    const attempts = existing.exists ? (existing.data().attempts || 0) + 1 : 1;
    const bestScore = existing.exists ? Math.max(existing.data().bestScore || 0, score) : score;
    
    await docRef.set({
      moduleId: moduleId,
      score: score,
      bestScore: bestScore,
      total: total,
      percentage: Math.round((score / total) * 100),
      bestPercentage: Math.round((bestScore / total) * 100),
      attempts: attempts,
      completedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    showToast(`Quiz score saved: ${score}/${total}`, 'success');
  } catch (error) {
    console.error('Error saving quiz score:', error);
    showToast('Failed to save score. Check your connection or Firestore settings.', 'error');
  }
}

// Get all quiz results for a user
async function getAllQuizResults(userId) {
  try {
    const snapshot = await db.collection('users').doc(userId).collection('quizResults').get();
    const results = {};
    snapshot.forEach(doc => {
      results[doc.id] = doc.data();
    });
    return results;
  } catch (error) {
    console.error('Error getting all quiz results:', error);
    return {};
  }
}

// Load user progress and update homepage grid
async function loadUserProgress(userId) {
  const results = await getAllQuizResults(userId);
  
  MODULES.forEach(mod => {
    if (mod.status !== 'available') return;
    
    const scoreBadge = document.getElementById(`score-${mod.id}`);
    const card = document.getElementById(`card-${mod.id}`);
    
    if (card) {
      const progressBar = card.querySelector('.progress-fill');
      const result = results[mod.id];
      
      if (result) {
        // Set progress bar width to the quiz percentage
        if (progressBar) {
          progressBar.style.width = result.bestPercentage + '%';
        }
        // Update score badge
        if (scoreBadge) {
          scoreBadge.textContent = `Score: ${result.bestScore}/${result.total}`;
          scoreBadge.classList.add('visible');
        }
      } else {
        if (progressBar) {
          progressBar.style.width = '0%';
        }
        if (scoreBadge) {
          scoreBadge.classList.remove('visible');
        }
      }
    }
  });
}
