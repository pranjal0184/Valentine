    function startConfetti() {
        var duration = 5 * 100;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 9,
                angle: 60,
                spread: 240,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 9,
                angle: 120,
                spread: 240,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
    window.onload = startConfetti;