window.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play') as HTMLElement | null;
    const pause = document.getElementById('pause') as HTMLElement | null;
    const seek = document.getElementById('seek') as HTMLInputElement | null;
    const video = document.querySelector('video') as HTMLVideoElement | null;
    const volume = document.getElementById('volume') as HTMLInputElement | null;
    const playback = document.getElementById('playback') as HTMLInputElement | null;

    if (!video || !play || !pause || !seek || !volume || !playback) { return; }

    function clickhandler(event: Event): void {
        const target = event.currentTarget as HTMLElement;
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
        if (isNaN(timeinseconds)) return '00:00:00';
        
        const hours = Math.floor(timeinseconds / 3600);
        const minutes = Math.floor((timeinseconds % 3600) / 60);
        const seconds = Math.floor(timeinseconds % 60);
        
        const h = hours < 10 ? '0' + hours : hours;
        const m = minutes < 10 ? '0' + minutes : minutes;
        const s = seconds < 10 ? '0' + seconds : seconds;
        
        return h + ':' + m + ':' + s;
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
        if (video) {
            video.currentTime = parseFloat(target.value);
            if (playback) {
                playback.value = target.value;
            }
        }
    }

    function volumehandler(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (video) {
            video.volume = parseFloat(target.value);
        }
    }

    play.addEventListener('click', clickhandler);
    pause.addEventListener('click', clickhandler);

    video.addEventListener('durationchange', updateduration);
    video.addEventListener('durationchange', updateseekmax);
    video.addEventListener('durationchange', updateplaybackmax);
    
    video.addEventListener('playing', updateseekmax);
    video.addEventListener('playing', updateplaybackmax);
    video.addEventListener('playing', updateduration);
    
    video.addEventListener('timeupdate', timeupdatehandler);
    video.addEventListener('timeupdate', updateseek);
    video.addEventListener('timeupdate', updateplayback);

    seek.addEventListener('input', seekhandler);
    volume.addEventListener('input', volumehandler);
});
