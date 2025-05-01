document.addEventListener('DOMContentLoaded', function() {
    // Quiz functionality
    const quizQuestions = document.querySelectorAll('.quiz-question');
    const correctAnswers = {
        'question-1': 'b',
        'question-2': 'a',
        'question-3': 'b',
        'question-4': 'a',
        'question-5': 'b'
    };
    
    quizQuestions.forEach(question => {
        const options = question.querySelectorAll('.option');
        const result = question.querySelector('.quiz-result');
        const questionId = question.id;
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                const selectedValue = this.getAttribute('data-value');
                
                // Remove selected class from all options
                options.forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Check if answer is correct
                if (selectedValue === correctAnswers[questionId]) {
                    result.textContent = 'Benar!';
                    result.className = 'quiz-result correct';
                } else {
                    result.textContent = 'Salah! Coba lagi.';
                    result.className = 'quiz-result incorrect';
                }
                
                result.style.display = 'block';
            });
        });
    });
});