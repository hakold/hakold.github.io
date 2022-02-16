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
        url: 'https://m10.music.126.net/20220216211251/8a497d8ff75b377000b2c5699633024a/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3695408209/3ba0/73e0/4ef0/1aa6e6b67f10abc3395c06d83d87269f.m4a',
        cover: 'http://p2.music.126.net/sF9I_mKMVNtsCD-ZXzfV_A==/109951165251958014.jpg',
        theme: '#ebd0c2'
        },
        {
            name: '怪兽',
            artist: 'YOASOBI',
            url: 'https://m701.music.126.net/20220216211533/39b95e44ede1b449444805bae640882c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/5231509006/f88f/f8f2/c5ea/677ed15f3d673ba074f60e687708c3b5.m4a',
            cover: 'https://p2.music.126.net/M9FA7rm098sFErf-B7QWOw==/109951165536665031.jpg',
            theme: '#ebd0c2'
        },
        {
            name: 'めめしぃ',
            artist: '枝川茉那',
            url: 'https://m701.music.126.net/20220216211800/f543ebfca0bccb25146314c86b87779d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11124143798/7e38/8d95/6445/4461bdfe792e215f357c9320598f106f.m4a',
            cover: '	https://p2.music.126.net/Y5PgSVay9L0w_pQhAPCoBA==/109951166492101645.jpg',
            theme: '#ebd0c2'
        }
    ]
  });