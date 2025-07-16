// src/components/Cursor.jsx
import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, button');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let idleTimer = null;

    // Create trails
    const trails = [];
    const trailCount = 5;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.opacity = 1 - i / trailCount;
      trail.style.transform = `scale(${1 - i / trailCount * 0.8})`;
      document.body.appendChild(trail);
      trails.push({
        el: trail,
        x: 0,
        y: 0,
        delay: i * 0.05,
      });
    }

    function updateCursor() {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      trails.forEach((t, i) => {
        t.x += (mouseX - t.x) * 0.15;
        t.y += (mouseY - t.y) * 0.15;
        t.el.style.transform = `translate(${t.x}px, ${t.y}px) scale(${1 - i / trailCount * 0.8})`;
        t.el.style.opacity = 0.6 * (1 - i / trailCount);
      });
      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 50) {
        cursor.classList.add('fast');
        cursor.classList.remove('slow');
      } else {
        cursor.classList.remove('fast');
        cursor.classList.add('slow');
      }

      if (dx > 10) cursor.className = 'cursor direction-right smart';
      else if (dx < -10) cursor.className = 'cursor direction-left smart';
      else if (dy > 10) cursor.className = 'cursor direction-down smart';
      else if (dy < -10) cursor.className = 'cursor direction-up smart';
      else cursor.className = 'cursor smart';

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        cursor.classList.add('idle');
      }, 1500);
      cursor.classList.remove('idle');
      lastX = mouseX;
      lastY = mouseY;
    });

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('active');
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff9900'];
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const angle = Math.random() * 360;
        const distance = Math.random() * 100 + 50;
        const offsetX = Math.cos(angle * (Math.PI / 180)) * distance + 'px';
        const offsetY = Math.sin(angle * (Math.PI / 180)) * distance + 'px';
        confetti.style.left = `${mouseX}px`;
        confetti.style.top = `${mouseY}px`;
        confetti.style.setProperty('--x-offset', offsetX);
        confetti.style.setProperty('--y-offset', offsetY);
        confetti.style.setProperty('--rotate', `${Math.random() * 720}deg`);
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
      }
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('active');
    });

    return () => {
      trails.forEach((t) => t.el.remove());
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
