// === 配置 ===
const PER_PAGE = 12;

// === 视频数据 ===
// 新增视频：在数组末尾追加
// 字段：title, url, embedUrl(可选), thumb(可选), duration(可选), date(可选), desc(可选)
// url 支持：mp4直链、YouTube、B站
// embedUrl: iframe嵌入地址
const videos = [
    // {
    //     title: "City Night Vibe",
    //     url: "https://upbolt.to/k5qwgw3eovvt",
    //     embedUrl: "https://upbolt.to/e/k5qwgw3eovvt",
    //     thumb: "https://i.upbolt.to/k5qwgw3eovvt_t.jpg",
    //     duration: "01:00",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Golden Hour Escape",
    //     url: "https://upbolt.to/oggxlj9697hk",
    //     embedUrl: "https://upbolt.to/e/oggxlj9697hk",
    //     thumb: "https://i.upbolt.to/oggxlj9697hk_t.jpg",
    //     duration: "01:46",
    //     date: "2026-05-23",
    //     desc: "852x480"
    // },
    // {
    //     title: "Hidden Mountain Valley",
    //     url: "https://upbolt.to/327br53rlgeu",
    //     embedUrl: "https://upbolt.to/e/327br53rlgeu",
    //     thumb: "https://i.upbolt.to/327br53rlgeu_t.jpg",
    //     duration: "01:03",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Morning Coffee Moments",
    //     url: "https://upbolt.to/rlizfpao3oo9",
    //     embedUrl: "https://upbolt.to/e/rlizfpao3oo9",
    //     thumb: "https://i.upbolt.to/rlizfpao3oo9_t.jpg",
    //     duration: "01:00",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Ocean Wave Serenity",
    //     url: "https://upbolt.to/wkqjo2sapz39",
    //     embedUrl: "https://upbolt.to/e/wkqjo2sapz39",
    //     thumb: "https://i.upbolt.to/wkqjo2sapz39_t.jpg",
    //     duration: "00:36",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Quiet Lakeside Calm",
    //     url: "https://upbolt.to/37jr2o8h8ytz",
    //     embedUrl: "https://upbolt.to/e/37jr2o8h8ytz",
    //     thumb: "https://i.upbolt.to/37jr2o8h8ytz_t.jpg",
    //     duration: "01:01",
    //     date: "2026-05-13",
    //     desc: "360x480"
    // },
    // {
    //     title: "Ryan Daharsh & Jesse Dillard talking about wrestling",
    //     url: "https://upbolt.to/cxh3ujp3iv53",
    //     embedUrl: "https://upbolt.to/e/cxh3ujp3iv53",
    //     thumb: "https://i.upbolt.to/cxh3ujp3iv53_t.jpg",
    //     duration: "01:23",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Starry Sky Adventure",
    //     url: "https://upbolt.to/wudelxm54kaa",
    //     embedUrl: "https://upbolt.to/e/wudelxm54kaa",
    //     thumb: "https://i.upbolt.to/wudelxm54kaa_t.jpg",
    //     duration: "02:48",
    //     date: "2026-05-23",
    //     desc: "640x480"
    // },
    // {
    //     title: "Street Light Stories",
    //     url: "https://upbolt.to/61p1rbzw69n3",
    //     embedUrl: "https://upbolt.to/e/61p1rbzw69n3",
    //     thumb: "https://i.upbolt.to/61p1rbzw69n3_t.jpg",
    //     duration: "01:23",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Sunset Road Journey",
    //     url: "https://upbolt.to/709lg6xgncpe",
    //     embedUrl: "https://upbolt.to/e/709lg6xgncpe",
    //     thumb: "https://i.upbolt.to/709lg6xgncpe_t.jpg",
    //     duration: "01:07",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    // {
    //     title: "Tiny World Discovery",
    //     url: "https://upbolt.to/2s64c2n7134o",
    //     embedUrl: "https://upbolt.to/e/2s64c2n7134o",
    //     thumb: "https://i.upbolt.to/2s64c2n7134o_t.jpg",
    //     duration: "03:02",
    //     date: "2026-05-23",
    //     desc: "852x480"
    // },
    // {
    //     title: "Whisper of The Forest",
    //     url: "https://upbolt.to/sjw3ei3yeo7x",
    //     embedUrl: "https://upbolt.to/e/sjw3ei3yeo7x",
    //     thumb: "https://i.upbolt.to/sjw3ei3yeo7x_t.jpg",
    //     duration: "02:05",
    //     date: "2026-05-23",
    //     desc: "480x480"
    // },
    // {
    //     title: "Wind Through The Leaves",
    //     url: "https://upbolt.to/vok1wis8uqpw",
    //     embedUrl: "https://upbolt.to/e/vok1wis8uqpw",
    //     thumb: "https://i.upbolt.to/vok1wis8uqpw_t.jpg",
    //     duration: "01:00",
    //     date: "2026-05-23",
    //     desc: "272x480"
    // },
    {
        title: "Misty Peak Odyssey",
        url: "https://logiflix.net/d/z4ge2zg0odla",
        embedUrl: "https://logiflix.net/e/gnwt1cchsrao5",
        thumb: "https://past.bulge.mov/i/01/00017/z4ge2zg0odla_t.jpg",
        duration: "01:04",
        date: "2026-05-23",
        desc: "200x360"
    },
    {
        title: "Wild Wind Chronicle",
        url: "https://logiflix.net/d/jfclbbjmgbpa",
        embedUrl: "https://logiflix.net/e/vislsie0r7so0",
        thumb: "https://past.bulge.mov/i/01/00017/jfclbbjmgbpa_t.jpg",
        duration: "01:10",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Shadow Canyon Quest",
        url: "https://logiflix.net/d/okuoxct481jb",
        embedUrl: "https://logiflix.net/e/igeb3cmyvwgtq",
        thumb: "https://past.bulge.mov/i/01/00017/okuoxct481jb_xt.jpg",
        duration: "00:12",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Crystal Stream Dream",
        url: "https://logiflix.net/d/fahpttfn266x",
        embedUrl: "https://logiflix.net/e/wecdblm9hnrpo",
        thumb: "https://past.bulge.mov/i/01/00017/fahpttfn266x_xt.jpg",
        duration: "00:15",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Cloud Realm Adventure",
        url: "https://logiflix.net/d/p4h4gunn0zhl",
        embedUrl: "https://logiflix.net/e/rjt5s6d7ct026",
        thumb: "https://past.bulge.mov/i/01/00017/p4h4gunn0zhl_t.jpg",
        duration: "01:01",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "This is the longest video",
        url: "https://logiflix.net/d/3jdv2smbmb2l",
        embedUrl: "https://logiflix.net/e/vcis7q3f0t4yg",
        thumb: "https://past.bulge.mov/i/01/00017/3jdv2smbmb2l_t.jpg",
        duration: "00:27",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "long ago",
        url: "https://logiflix.net/d/4ve2xhvmueun",
        embedUrl: "https://logiflix.net/e/fj91r3smm4uha",
        thumb: "https://past.bulge.mov/i/02/00017/4ve2xhvmueun_t.jpg",
        duration: "01:02",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Ranking Funniest Hypnosis Pranks",
        url: "https://logiflix.net/d/kr40xdocx6ot",
        embedUrl: "https://logiflix.net/e/383dqt6p1ux9l",
        thumb: "https://past.bulge.mov/i/02/00017/kr40xdocx6ot_t.jpg",
        duration: "01:00",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Ryan Daharsh & Jesse Dillard talking about wrestling",
        url: "https://logiflix.net/d/nks78jyv08q0",
        embedUrl: "https://logiflix.net/e/9i7598x75dr2f",
        thumb: "https://past.bulge.mov/i/02/00017/nks78jyv08q0_t.jpg",
        duration: "01:23",
        date: "2026-05-23",
        desc: "404x720"
    },
    {
        title: "Make Your Day",
        url: "https://logiflix.net/d/0jfuz5neupbv",
        embedUrl: "https://logiflix.net/e/vxxhm8vh7h0dj",
        thumb: "https://past.bulge.mov/i/02/00017/0jfuz5neupbv_t.jpg",
        duration: "01:01",
        date: "2026-05-23",
        desc: "540x720"
    },
];

// === 状态 ===
let currentPage = 1;
let filteredVideos = [...videos];

// === 初始化 ===
document.addEventListener('DOMContentLoaded', () => {
    renderPage();
});

// === 搜索 ===
function handleSearch() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    filteredVideos = q
        ? videos.filter(v => v.title.toLowerCase().includes(q) || (v.desc || '').toLowerCase().includes(q))
        : [...videos];
    currentPage = 1;
    renderPage();
}

// === 渲染 ===
function renderPage() {
    const grid = document.getElementById('videoGrid');
    const pag = document.getElementById('pagination');
    const empty = document.getElementById('emptyMsg');

    const total = filteredVideos.length;
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PER_PAGE;
    const pageVideos = filteredVideos.slice(start, start + PER_PAGE);

    if (pageVideos.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        pag.innerHTML = '';
        return;
    }
    empty.style.display = 'none';

    grid.innerHTML = pageVideos.map((v, i) => {
        const idx = start + i;
        const thumbSrc = v.thumb || generateThumb(v.title);
        const dur = v.duration || '';
        return `
        <div class="video-card" onclick="openVideo(${idx})">
            <div class="video-thumb">
                <img src="${thumbSrc}" alt="${escHtml(v.title)}" loading="lazy" onerror="this.src='${generateThumb(v.title)}'">
                <div class="play-icon"></div>
                ${dur ? `<span class="video-duration">${dur}</span>` : ''}
            </div>
            <div class="video-info">
                <h3>${escHtml(v.title)}</h3>
                <div class="meta">
                    ${v.date ? `<span>${v.date}</span>` : ''}
                    ${v.desc ? `<span>${escHtml(v.desc.slice(0, 30))}${v.desc.length > 30 ? '…' : ''}</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');

    if (totalPages <= 1) {
        pag.innerHTML = '';
        return;
    }

    let pagHtml = '';
    pagHtml += `<button onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Previous Page</button>`;

    const pages = getPageRange(currentPage, totalPages);
    pages.forEach(p => {
        if (p === '...') {
            pagHtml += `<span class="page-info">…</span>`;
        } else {
            pagHtml += `<button class="${p === currentPage ? 'active' : ''}" onclick="goPage(${p})">${p}</button>`;
        }
    });

    pagHtml += `<button onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next Page</button>`;
    pagHtml += `<span class="page-info">${currentPage}/${totalPages}页</span>`;

    pag.innerHTML = pagHtml;
}

function goPage(p) {
    const totalPages = Math.ceil(filteredVideos.length / PER_PAGE);
    if (p < 1 || p > totalPages) return;
    currentPage = p;
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getPageRange(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [];
    if (current <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...', total);
    } else if (current >= total - 3) {
        pages.push(1, '...');
        for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
        pages.push(1, '...');
        for (let i = current - 1; i <= current + 1; i++) pages.push(i);
        pages.push('...', total);
    }
    return pages;
}

// === 播放弹窗 ===
function openVideo(idx) {
    const v = filteredVideos[idx];
    if (!v) return;

    const overlay = document.getElementById('modalOverlay');
    const videoBox = document.getElementById('modalVideo');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDesc');

    titleEl.textContent = v.title;
    descEl.textContent = v.desc || '';

    if (v.embedUrl) {
        videoBox.innerHTML = `<iframe src="${v.embedUrl}" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>`;
    } else {
        videoBox.innerHTML = `<video src="${v.url}" controls autoplay></video>`;
    }


    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    const overlay = document.getElementById('modalOverlay');
    const videoBox = document.getElementById('modalVideo');
    videoBox.innerHTML = '';
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// === 工具 ===
function escHtml(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

function generateThumb(title) {
    const ch = (title || 'V')[0];
    const colors = ['#ff4757','#2ed573','#1e90ff','#ffa502','#a55eea','#ff6b81','#70a1ff','#7bed9f'];
    const bg = colors[title.length % colors.length];
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="${bg}"/><text x="320" y="200" text-anchor="middle" fill="#fff" font-size="80" font-family="sans-serif">${ch}</text><polygon points="300,160 300,200 340,180" fill="#fff" opacity="0.8"/></svg>`)}`;
}
