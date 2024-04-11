import{_ as a,c as e,o as s,a4 as i}from"./chunks/framework.DhooLXd5.js";const t="/assets/gimp.DWVezyDn.png",r="/assets/aseprite.CkXgJty5.png",p="/assets/rawtherapee.BP-w-TzK.png",l="/assets/kolourpaint.Bc8SQ46l.png",n="/assets/inkscape.BLMyjjbP.png",h="/assets/Art_Bot.CaV9o8pQ.svg",d="/assets/krita.DjTv7UHv.png",C=JSON.parse('{"title":"图像制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"app/exclusive/image.md","filePath":"app/exclusive/image.md","lastUpdated":1687091283000}'),o={name:"app/exclusive/image.md"},c=i('<h1 id="图像制作" tabindex="-1">图像制作 <a class="header-anchor" href="#图像制作" aria-label="Permalink to &quot;图像制作&quot;">​</a></h1><blockquote><h3 id="🌺-乱花渐欲迷人眼-浅草才能没马蹄" tabindex="-1">🌺 乱花渐欲迷人眼，浅草才能没马蹄 <a class="header-anchor" href="#🌺-乱花渐欲迷人眼-浅草才能没马蹄" aria-label="Permalink to &quot;🌺 乱花渐欲迷人眼，浅草才能没马蹄&quot;">​</a></h3><p>本小节讨论如何在 archlinux 上编辑、管理位图以及矢量图，以及绘画。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🖼️-位图编辑">🖼️ 位图编辑</a><ul><li><a href="#gimp">GIMP</a></li><li><a href="#aseprite">Aseprite</a></li><li><a href="#rawtherapee">RawTherapee</a></li><li><a href="#kolourpaint">KolourPaint</a></li></ul></li><li><a href="#🖼️-矢量图编辑">🖼️ 矢量图编辑</a><ul><li><a href="#inkscape">Inkscape</a></li></ul></li><li><a href="#🎨-绘画">🎨 绘画</a><ul><li><a href="#krita">Krita</a></li></ul></li><li><a href="#🖼️-gif-制作">🖼️ GIF 制作</a><ul><li><a href="#gifcurry">Gifcurry</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🖼️-位图编辑" tabindex="-1">🖼️ 位图编辑 <a class="header-anchor" href="#🖼️-位图编辑" aria-label="Permalink to &quot;🖼️ 位图编辑&quot;">​</a></h2><h3 id="gimp" tabindex="-1">GIMP <a class="header-anchor" href="#gimp" aria-label="Permalink to &quot;GIMP&quot;">​</a></h3><p><a href="https://www.gimp.org/" target="_blank" rel="noreferrer">GIMP</a> 是一个自由开源的位图图像编辑器。其对标 <a href="https://www.adobe.com/cn/" target="_blank" rel="noreferrer">Adobe</a> 的 <a href="https://www.adobe.com/cn/products/photoshop.html" target="_blank" rel="noreferrer">Photoshop</a><sup>EULA</sup>。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/gimp/" target="_blank" rel="noreferrer">GIMP</a><sup>extra / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HhSg2" id="tab-lX88pY0" checked="checked"><label for="tab-lX88pY0">extra</label><input type="radio" name="group-HhSg2" id="tab-9SSU_5D"><label for="tab-9SSU_5D">cn (git)</label><input type="radio" name="group-HhSg2" id="tab-qpgdORn"><label for="tab-qpgdORn">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gimp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gimp-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/gimp-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+t+'" alt="gimp"></p><h3 id="aseprite" tabindex="-1">Aseprite <a class="header-anchor" href="#aseprite" aria-label="Permalink to &quot;Aseprite&quot;">​</a></h3><p><a href="https://www.aseprite.org/" target="_blank" rel="noreferrer">Aseprite</a> 是一款像素艺术绘制工具。</p><p>安装 <a href="https://aur.archlinux.org/packages/aseprite/" target="_blank" rel="noreferrer">Aseprite</a><sup>EULA / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hBwzJ" id="tab-Zlz3Thf" checked="checked"><label for="tab-Zlz3Thf">aur</label><input type="radio" name="group-hBwzJ" id="tab-rqTZFs-"><label for="tab-rqTZFs-">aur (bin)</label><input type="radio" name="group-hBwzJ" id="tab-eVhSOyY"><label for="tab-eVhSOyY">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aseprite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aseprite-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aseprite-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+r+'" alt="aseprite"></p><h3 id="rawtherapee" tabindex="-1">RawTherapee <a class="header-anchor" href="#rawtherapee" aria-label="Permalink to &quot;RawTherapee&quot;">​</a></h3><p><a href="https://rawtherapee.com/" target="_blank" rel="noreferrer">RawTherapee</a> 是一个自由开源的跨平台 RAW 格式图像处理程序。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/rawtherapee/" target="_blank" rel="noreferrer">RawTherapee</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ENHqW" id="tab-nOfVIAB" checked="checked"><label for="tab-nOfVIAB">extra</label><input type="radio" name="group-ENHqW" id="tab-XEwE_DZ"><label for="tab-XEwE_DZ">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rawtherapee</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rawtherapee-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+p+'" alt="rawtherapee"></p><h3 id="kolourpaint" tabindex="-1">KolourPaint <a class="header-anchor" href="#kolourpaint" aria-label="Permalink to &quot;KolourPaint&quot;">​</a></h3><p>KolourPaint 是 KDE 开发的一个简单易用的自由开源的绘图程序（类似 Windows 自带的画图），可以创建点阵图像。可用来对图片进行润色和简单编辑。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kolourpaint/" target="_blank" rel="noreferrer">KolourPaint</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Dqu6S" id="tab-E3a8GZf" checked="checked"><label for="tab-E3a8GZf">extra</label><input type="radio" name="group-Dqu6S" id="tab-3FOqGtt"><label for="tab-3FOqGtt">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kolourpaint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kolourpaint-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+l+'" alt="kolourpaint"></p><h2 id="🖼️-矢量图编辑" tabindex="-1">🖼️ 矢量图编辑 <a class="header-anchor" href="#🖼️-矢量图编辑" aria-label="Permalink to &quot;🖼️ 矢量图编辑&quot;">​</a></h2><h3 id="inkscape" tabindex="-1">Inkscape <a class="header-anchor" href="#inkscape" aria-label="Permalink to &quot;Inkscape&quot;">​</a></h3><p>Inkscape 是自由开源的矢量图形编辑器。该软件的开发目标是成为强大的绘图软件，且能完全遵循与支持 XML、SVG 及 CSS 等开放性的标准格式。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/inkscape/" target="_blank" rel="noreferrer">Inkscape</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-czQDG" id="tab-wG1qUHB" checked="checked"><label for="tab-wG1qUHB">extra</label><input type="radio" name="group-czQDG" id="tab-tpr1ExP"><label for="tab-tpr1ExP">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inkscape</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inkscape-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+n+'" alt="inkscape"></p><blockquote><h4 id="📑-相关资料-什么是矢量图形" tabindex="-1">📑 相关资料：什么是矢量图形？ <a class="header-anchor" href="#📑-相关资料-什么是矢量图形" aria-label="Permalink to &quot;📑 相关资料：什么是矢量图形？&quot;">​</a></h4><p>矢量图形是计算机图形学中用点、直线或者多边形等基于数学方程的几何图元表示的图像。</p><p>矢量图形与使用像素表示图像的位图不同。任意放大矢量图形，不会丢失细节或影响清晰度。</p><p>下面这个图片便是矢量图，可以尝试将其放大：</p><p><img src="'+h+'" alt="Art_Bot"></p></blockquote><h2 id="🎨-绘画" tabindex="-1">🎨 绘画 <a class="header-anchor" href="#🎨-绘画" aria-label="Permalink to &quot;🎨 绘画&quot;">​</a></h2><h3 id="krita" tabindex="-1">Krita <a class="header-anchor" href="#krita" aria-label="Permalink to &quot;Krita&quot;">​</a></h3><p><a href="https://krita.org/zh/" target="_blank" rel="noreferrer">Krita</a> 是一个自由开源的位图图像编辑器。它针对数字绘画和动画创作特化，提供包括低干扰用户界面、OpenGL 加速画布、色彩管理、功能强大的笔刷引擎、非破坏性图层和蒙版、图层分组、矢量图形支持和可切换界面预设等在内的一系列特色功能。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/krita/" target="_blank" rel="noreferrer">Krita</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oD6ge" id="tab-YXo5PjZ" checked="checked"><label for="tab-YXo5PjZ">extra</label><input type="radio" name="group-oD6ge" id="tab-ICIeIZy"><label for="tab-ICIeIZy">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> krita</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> krita-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+d+'" alt="krita"></p><h2 id="🖼️-gif-制作" tabindex="-1">🖼️ GIF 制作 <a class="header-anchor" href="#🖼️-gif-制作" aria-label="Permalink to &quot;🖼️ GIF 制作&quot;">​</a></h2><h3 id="gifcurry" tabindex="-1">Gifcurry <a class="header-anchor" href="#gifcurry" aria-label="Permalink to &quot;Gifcurry&quot;">​</a></h3><p><a href="https://lettier.github.io/gifcurry/" target="_blank" rel="noreferrer">Gifcurry</a> 是面向 GIF 制作者的开源、Haskell 构建的视频编辑器。</p><p>安装 <a href="https://aur.archlinux.org/packages/gifcurry/" target="_blank" rel="noreferrer">Gifcurry</a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gifcurry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',43),u=[c];function k(g,b,m,v,y,F){return s(),e("div",null,u)}const _=a(o,[["render",k]]);export{C as __pageData,_ as default};
