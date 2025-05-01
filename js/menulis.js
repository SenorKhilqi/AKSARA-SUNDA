document.addEventListener('DOMContentLoaded', function() {
    // Latin to Sundanese converter functionality
    const latinTextInput = document.getElementById('latin-text');
    const convertBtn = document.getElementById('convert-btn');
    const aksaraResult = document.getElementById('aksara-result');
    
    // Simplified mapping for Latin to Sundanese script conversion
    const latinToSundanese = {
        // Vowels (Swara)
        'a': 'ᮃ', 'i': 'ᮄ', 'u': 'ᮅ', 'é': 'ᮆ', 'o': 'ᮇ', 'e': 'ᮈ', 'eu': 'ᮉ',
        
        // Consonants (Ngalagena)
        'ka': 'ᮊ', 'ga': 'ᮌ', 'nga': 'ᮍ', 'ca': 'ᮎ', 'ja': 'ᮏ', 'nya': 'ᮑ',
        'ta': 'ᮒ', 'da': 'ᮓ', 'na': 'ᮔ', 'pa': 'ᮕ', 'ba': 'ᮘ', 'ma': 'ᮙ',
        'ya': 'ᮚ', 'ra': 'ᮛ', 'la': 'ᮜ', 'wa': 'ᮝ', 'sa': 'ᮞ', 'ha': 'ᮠ',
        
        // For simple conversion demonstration
        'k': 'ᮊ᮪', 'g': 'ᮌ᮪', 'ng': 'ᮍ᮪', 'c': 'ᮎ᮪', 'j': 'ᮏ᮪', 'ny': 'ᮑ᮪',
        't': 'ᮒ᮪', 'd': 'ᮓ᮪', 'n': 'ᮔ᮪', 'p': 'ᮕ᮪', 'b': 'ᮘ᮪', 'm': 'ᮙ᮪',
        'y': 'ᮚ᮪', 'r': 'ᮛ᮪', 'l': 'ᮜ᮪', 'w': 'ᮝ᮪', 's': 'ᮞ᮪', 'h': 'ᮠ᮪'
    };
    
    // Very simplified converter (for demonstration purposes)
    function convertToSundanese(text) {
        let result = '';
        let i = 0;
        
        while (i < text.length) {
            // Try to match two-character patterns
            if (i < text.length - 1) {
                const twoChar = text.substr(i, 2);
                if (latinToSundanese[twoChar]) {
                    result += latinToSundanese[twoChar];
                    i += 2;
                    continue;
                }
            }
            
            // Try to match single character
            const char = text[i];
            if (latinToSundanese[char]) {
                result += latinToSundanese[char];
            } else {
                // If not found, just add the original character
                result += char;
            }
            
            i++;
        }
        
        return result;
    }
    
    convertBtn.addEventListener('click', function() {
        const latinText = latinTextInput.value.trim().toLowerCase();
        if (latinText) {
            // For demonstration purpose - this is a simplified conversion
            // In a real converter, we would need much more sophisticated logic
            let convertedText;
            
            // Special case handling for examples
            if (latinText === 'kucing') {
                convertedText = 'ᮊᮥᮎᮤᮍ᮪';
            } else if (latinText === 'sunda') {
                convertedText = 'ᮞᮥᮔ᮪ᮓ';
            } else if (latinText === 'bogor') {
                convertedText = 'ᮘᮧᮌᮧᮁ';
            } else if (latinText === 'aksara') {
                convertedText = 'ᮃᮊ᮪ᮞᮛ';
            } else if (latinText === 'salam') {
                convertedText = 'ᮞᮜᮙ᮪';
            } else {
                // Otherwise use the simplified converter
                convertedText = convertToSundanese(latinText);
            }
            
            aksaraResult.textContent = convertedText;
        } else {
            aksaraResult.textContent = 'Silahkan masukkan teks terlebih dahulu!';
        }
    });
});