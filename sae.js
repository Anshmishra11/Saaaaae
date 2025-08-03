 // Add some interactive carnival magic
    document.addEventListener('mousemove', (e) => {
      const carnivalFloats = document.querySelectorAll('.carnival-float');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      carnivalFloats.forEach((float, index) => {
        const speed = (index + 1) * 0.02;
        const x = mouseX * 20 * speed;
        const y = mouseY * 20 * speed;
        float.style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    // Add click effects to program buttons
    document.querySelectorAll('.program-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const cardTitle = this.closest('.program-card').querySelector('h3').textContent;
        alert(`Welcome to ${cardTitle}! Ready to join the dark side of engineering? 🎪⚙️`);
      });
    });

    // Add newsletter subscription functionality
    document.querySelector('.subscribe-btn').addEventListener('click', function() {
      const email = document.querySelector('.email-input').value;
      if (email) {
        alert(`🎪 Welcome to the Dark Carnival! ${email} has joined our twisted engineering society! 🎭⚙️`);
        document.querySelector('.email-input').value = '';
      } else {
        alert('Enter your email to join the carnival! 📧');
      }
    });

    // Add social media click effects
    document.querySelectorAll('.social-icon').forEach(icon => {
      icon.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.className.includes('instagram') ? 'Instagram' : 
                         this.className.includes('linkedin') ? 'LinkedIn' :
                         this.className.includes('github') ? 'GitHub' :
                         this.className.includes('youtube') ? 'YouTube' : 'Twitter';
        alert(`🎪 Connecting to SAE MMMUT ${platform}! Join our dark engineering community! 🎭`);
      });
    });

    // Animate stats number on load
    window.addEventListener('load', () => {
      const statsNumber = document.querySelector('.stats-number');
      let count = 0;
      const target = 500;
      const increment = target / 100;
      
      const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(counter);
        }
        statsNumber.textContent = Math.floor(count) + '+';
      }, 20);
    });
