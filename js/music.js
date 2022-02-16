const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true,
    storageName: 'aplayer-setting',
    audio: [
        {
        name: '群青',
        artist: 'YOASOBI',
        url: 'https://www.ytmp3.cn/down/75496.mp3',
        cover: 'http://p2.music.126.net/sF9I_mKMVNtsCD-ZXzfV_A==/109951165251958014.jpg',
        },
        {
            name: '怪兽',
            artist: 'YOASOBI',
            url: 'https://www.ytmp3.cn/down/75492.mp3',
            cover: 'https://p2.music.126.net/M9FA7rm098sFErf-B7QWOw==/109951165536665031.jpg',
        }
    ]
  });