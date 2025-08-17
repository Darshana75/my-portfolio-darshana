/* -----------------------------------------------
/* Unique Floating Orbs Style
/* ----------------------------------------------- */

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#5f27cd"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.6,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 15,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.5
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "background_color": "#0f2027",
    "background_image": "linear-gradient(120deg, #2c5364, #203a43, #0f2027)",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}); 