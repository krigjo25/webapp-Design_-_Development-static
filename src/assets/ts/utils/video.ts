window.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play') as HTMLElement | null;
    const pause = document.getElementById('pause') as HTMLElement | null;
    const seek = document.getElementById('seek') as HTMLInputElement | null;
    const video = document.querySelector('video') as HTMLVideoElement | null;
    const volume = document.getElementById('volume') as HTMLInputElement | null;
    const playback = document.getElementById('playback') as HTMLInputElement | null;

    if (!video || !play || !pause || !seek || !volume || !playback) { return; }

    function clickhandler(event: Event): void {
        const target = event.target as HTMLElement;
        const id = target.id;
        if (video && play && pause) {
            if (id === 'play') {
                video.play();
                video.preload = 'metadata';
                play.classList.add('hidden');
                pause.classList.remove('hidden');
            }
            if (id === 'pause') {
                video.pause();
                pause.classList.add('hidden');
                play.classList.remove('hidden');
            }
        }
    }
 
    function updateduration(event: Event): void {
        const target = event.target as HTMLVideoElement;
        const durationdisplay = document.getElementById('duration');
        const elapsed = document.getElementById('elapsed');
        if (durationdisplay) {
            durationdisplay.innerHTML = formattime(target.duration);
        }
        if (elapsed) {
            elapsed.innerHTML = formattime(target.currentTime);
        }
    }

    function updateseekmax(event: Event): void {
        const target = event.target as HTMLVideoElement;
        if (target.duration && seek) {
            seek.max = target.duration.toString();
        }
    }

    function updateplaybackmax(event: Event): void {
        const target = event.target as HTMLVideoElement;
        if (target.duration && playback) {
            playback.max = target.duration.toString();
        }
    }

    function updateseek(event: Event): void {
        const target = event.target as HTMLVideoElement;
        if (target.currentTime && seek) {
            seek.value = Math.floor(target.currentTime).toString();
        }
    }

    function updateplayback(event: Event): void {
        const target = event.target as HTMLVideoElement;
        if (target.currentTime && playback) {
            playback.value = Math.floor(target.currentTime).toString();
        }
    }

    function formattime(timeinseconds: number): string {
        var zeroes = '0', hours, minutes, seconds, time;
        time = new Date(0, 0, 0, 0, 0, timeinseconds, 0);

        hours   = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        
        const hoursStr = (zeroes + hours).slice(-2);
        const minutesStr = (zeroes + minutes).slice(-2);
        const secondsStr = (zeroes + seconds).slice(-2);
        
        return hoursStr + ':' + minutesStr + ':' + secondsStr;
    }

    function timeupdatehandler(event: Event): void {
        const target = event.target as HTMLVideoElement;
        const elapsed = document.getElementById('elapsed');
        if (elapsed) {
            elapsed.innerHTML = formattime(target.currentTime);
        }
    }

    function seekhandler(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (video && playback) {
            video.currentTime = parseFloat(target.value);
            playback.value = target.value;
        }
    }

    function volumehandler(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (video) {
            video.volume = parseFloat(target.value);
        }
    }

    play.addEventListener('mousedown', clickhandler);
    pause.addEventListener('mousedown', clickhandler);

    video.addEventListener('durationchange', updateduration);
    video.addEventListener('durationchange', updateseekmax);
    video.addEventListener('durationchange', updateplaybackmax);
    
    video.addEventListener('playing', updateseekmax);
    video.addEventListener('playing', updateplaybackmax);
    video.addEventListener('playing', updateduration);
    
    video.addEventListener('timeupdate', timeupdatehandler);
    video.addEventListener('timeupdate', updateseek);
    video.addEventListener('timeupdate', updateplayback);

    seek.addEventListener('change', seekhandler);
    volume.addEventListener('change', volumehandler);
});
