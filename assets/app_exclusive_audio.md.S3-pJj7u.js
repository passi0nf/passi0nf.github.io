import{_ as a,c as s,o as e,a4 as i}from"./chunks/framework.DhooLXd5.js";const r="/assets/ardour.519QNW4T.png",t="/assets/kwave.DS__CHr5.png",l="/assets/audacity.BGG9bECf.png",n="/assets/vcvrack.4lT_5Pg3.png",p="/assets/mixxx.C7gwthx3.png",h="/assets/lmms.B21HWpEx.png",d="/assets/musescore.CRH02MIq.png",o="/assets/lyrebird.B4mbxwpL.png",c="/assets/soundconverter.CmrM0FLu.png",_=JSON.parse('{"title":"音频制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"app/exclusive/audio.md","filePath":"app/exclusive/audio.md","lastUpdated":1687091283000}'),u={name:"app/exclusive/audio.md"},k=i('<h1 id="音频制作" tabindex="-1">音频制作 <a class="header-anchor" href="#音频制作" aria-label="Permalink to &quot;音频制作&quot;">​</a></h1><blockquote><h3 id="🎵-此曲只应天上有-人间能得几回闻" tabindex="-1">🎵 此曲只应天上有，人间能得几回闻 <a class="header-anchor" href="#🎵-此曲只应天上有-人间能得几回闻" aria-label="Permalink to &quot;🎵 此曲只应天上有，人间能得几回闻&quot;">​</a></h3><p>本小节讨论如何在 archlinux 上制作音乐、编辑音频等信息。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🎚️-音频编辑">🎚️ 音频编辑</a><ul><li><a href="#ardour">Ardour</a></li><li><a href="#kwave">Kwave</a></li><li><a href="#audacity">Audacity</a></li><li><a href="#vcv-rack">VCV Rack</a></li></ul></li><li><a href="#🎛️-唱片骑师">🎛️ 唱片骑师</a><ul><li><a href="#mixxx">Mixxx</a></li></ul></li><li><a href="#🎼-编曲软件">🎼 编曲软件</a><ul><li><a href="#lmms">LMMS</a></li><li><a href="#musescore">MuseScore</a></li></ul></li><li><a href="#🎙️-变声器">🎙️ 变声器</a><ul><li><a href="#lyrebird">Lyrebird</a></li></ul></li><li><a href="#🗄️-管理与转换">🗄️ 管理与转换</a><ul><li><a href="#soundconverter">SoundConverter</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🎚️-音频编辑" tabindex="-1">🎚️ 音频编辑 <a class="header-anchor" href="#🎚️-音频编辑" aria-label="Permalink to &quot;🎚️ 音频编辑&quot;">​</a></h2><h3 id="ardour" tabindex="-1">Ardour <a class="header-anchor" href="#ardour" aria-label="Permalink to &quot;Ardour&quot;">​</a></h3><p><a href="https://ardour.org/" target="_blank" rel="noreferrer">Ardour</a> 是一款自由开源的让你可以在 Linux 上录音、编辑和混音的软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/ardour/" target="_blank" rel="noreferrer">Ardour</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--LZLn" id="tab-LuyDnCV" checked="checked"><label for="tab-LuyDnCV">extra</label><input type="radio" name="group--LZLn" id="tab-PoK-srI"><label for="tab-PoK-srI">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ardour</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ardour-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+r+'" alt="ardour"></p><h3 id="kwave" tabindex="-1">Kwave <a class="header-anchor" href="#kwave" aria-label="Permalink to &quot;Kwave&quot;">​</a></h3><p><a href="https://apps.kde.org/zh-cn/kwave/" target="_blank" rel="noreferrer">Kwave</a> 是 KDE 开发的一款自由开源的音频编辑软件，可以录制、播放、导入和编辑许多音频文件，包括多声道文件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kwave/" target="_blank" rel="noreferrer">Kwave</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QkHzr" id="tab-apE3b9f" checked="checked"><label for="tab-apE3b9f">extra</label><input type="radio" name="group-QkHzr" id="tab-TRAPagR"><label for="tab-TRAPagR">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kwave</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kwave-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+t+'" alt="kwave"></p><h3 id="audacity" tabindex="-1">Audacity <a class="header-anchor" href="#audacity" aria-label="Permalink to &quot;Audacity&quot;">​</a></h3><p><a href="https://www.audacityteam.org/" target="_blank" rel="noreferrer">Audacity</a> 是一款跨平台的自由开源音频编辑软件，用于录音和编辑音频。2021 年 4 月 30 日，Audacity 被 <a href="https://mu.se/" target="_blank" rel="noreferrer">Muse Group</a> 收购。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/audacity/" target="_blank" rel="noreferrer">Audacity</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wwZht" id="tab-8fCRcQO" checked="checked"><label for="tab-8fCRcQO">extra</label><input type="radio" name="group-wwZht" id="tab-P_4zNR1"><label for="tab-P_4zNR1">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audacity</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audacity-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+l+'" alt="audacity"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>Audacity 被 Muse Group 收购后，根据 <a href="https://fosspost.org/audacity-is-now-a-spyware/" target="_blank" rel="noreferrer">相关报道</a>，其隐私政策的变化显示该工具正在收集其用户的数据并与其它公司共享。</p><p>在各大开源社区中出现了许多愤怒的回应，<a href="https://github.com/audacity/audacity/issues/1213" target="_blank" rel="noreferrer">GitHub</a> 和 <a href="https://www.reddit.com/r/linux/comments/od3h8b/audacity_may_collect_data_necessary_for_law/" target="_blank" rel="noreferrer">Reddit</a> 上的用户纷纷呼吁尽快派生（Fork）该软件（已经有了）。</p><p>若对此有关切，可以使用派生的版本 <a href="https://aur.archlinux.org/packages/audiocity-git/" target="_blank" rel="noreferrer"><code>audiocity-git</code></a><sup>aur</sup>（功能没有改动）：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audiocity-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者 <a href="https://aur.archlinux.org/packages/audacium-git/" target="_blank" rel="noreferrer">audacium</a><sup>aur</sup>（添加了新特性）：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audacium-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="vcv-rack" tabindex="-1">VCV Rack <a class="header-anchor" href="#vcv-rack" aria-label="Permalink to &quot;VCV Rack&quot;">​</a></h3><p><a href="https://vcvrack.com/" target="_blank" rel="noreferrer">VCV Rack</a> 是一款开源可视化、模块化的音响合成器。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/audacity/" target="_blank" rel="noreferrer">VCV Rack</a><sup>aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-U1yWe" id="tab-zMmKaux" checked="checked"><label for="tab-zMmKaux">aur (bin)</label><input type="radio" name="group-U1yWe" id="tab-CGfQook"><label for="tab-CGfQook">aur</label><input type="radio" name="group-U1yWe" id="tab-ETJiaSh"><label for="tab-ETJiaSh">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vcvrack-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vcvrack</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vcvrack-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>在终端通过 <code>vcvrack</code> 命令启动 VCV Rack：</p><p><img src="'+n+'" alt="vcvrack"></p></li></ol><h2 id="🎛️-唱片骑师" tabindex="-1">🎛️ 唱片骑师 <a class="header-anchor" href="#🎛️-唱片骑师" aria-label="Permalink to &quot;🎛️ 唱片骑师&quot;">​</a></h2><h3 id="mixxx" tabindex="-1">Mixxx <a class="header-anchor" href="#mixxx" aria-label="Permalink to &quot;Mixxx&quot;">​</a></h3><p><a href="https://mixxx.org/" target="_blank" rel="noreferrer">Mixxx</a> 集成了 DJ 使用数字音乐文件进行创造性现场混音所需的工具。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/mixxx/" target="_blank" rel="noreferrer">Mixxx</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-K-hS0" id="tab-l4rNNwq" checked="checked"><label for="tab-l4rNNwq">extra</label><input type="radio" name="group-K-hS0" id="tab-6OHBzDh"><label for="tab-6OHBzDh">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mixxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mixxx-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+p+'" alt="mixxx"></p><h2 id="🎼-编曲软件" tabindex="-1">🎼 编曲软件 <a class="header-anchor" href="#🎼-编曲软件" aria-label="Permalink to &quot;🎼 编曲软件&quot;">​</a></h2><h3 id="lmms" tabindex="-1">LMMS <a class="header-anchor" href="#lmms" aria-label="Permalink to &quot;LMMS&quot;">​</a></h3><p><a href="https://lmms.io/" target="_blank" rel="noreferrer">LMMS</a> 是免费自由开源并且跨平台的作曲工具。通过制作旋律和节拍，合成和混合音频，安排音频片段等方法创作音乐。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/lmms/" target="_blank" rel="noreferrer">LMMS</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cMRCf" id="tab-WempJQA" checked="checked"><label for="tab-WempJQA">extra</label><input type="radio" name="group-cMRCf" id="tab-tJTH0Jl"><label for="tab-tJTH0Jl">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lmms</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lmms-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+h+'" alt="lmms"></p><h3 id="musescore" tabindex="-1">MuseScore <a class="header-anchor" href="#musescore" aria-label="Permalink to &quot;MuseScore&quot;">​</a></h3><p><a href="https://musescore.org/zh-hans" target="_blank" rel="noreferrer">MuseScore</a> 是 Muse Group 开发的一个跨平台的自由开源制谱软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/lmms/" target="_blank" rel="noreferrer">MuseScore</a><sup>extra / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ku6xS" id="tab-1OaNscW" checked="checked"><label for="tab-1OaNscW">extra</label><input type="radio" name="group-ku6xS" id="tab-2j1Y9jD"><label for="tab-2j1Y9jD">cn (git)</label><input type="radio" name="group-ku6xS" id="tab--Q3uoYr"><label for="tab--Q3uoYr">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> musescore</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> musescore-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/musescore-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+d+'" alt="musescore"></p><h2 id="🎙️-变声器" tabindex="-1">🎙️ 变声器 <a class="header-anchor" href="#🎙️-变声器" aria-label="Permalink to &quot;🎙️ 变声器&quot;">​</a></h2><h3 id="lyrebird" tabindex="-1">Lyrebird <a class="header-anchor" href="#lyrebird" aria-label="Permalink to &quot;Lyrebird&quot;">​</a></h3><p><a href="https://github.com/lyrebird-voice-changer/lyrebird" target="_blank" rel="noreferrer">Lyrebird</a>是 自由开源且简单强大的 Linux 变声器，用 GTK 3 编写。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/lmms/" target="_blank" rel="noreferrer">Lyrebird</a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lyrebird</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="lyrebird"></p><h2 id="🗄️-管理与转换" tabindex="-1">🗄️ 管理与转换 <a class="header-anchor" href="#🗄️-管理与转换" aria-label="Permalink to &quot;🗄️ 管理与转换&quot;">​</a></h2><h3 id="soundconverter" tabindex="-1">SoundConverter <a class="header-anchor" href="#soundconverter" aria-label="Permalink to &quot;SoundConverter&quot;">​</a></h3><p><a href="https://soundconverter.org/" target="_blank" rel="noreferrer">SoundConverter</a> 是 GNOME 桌面的音频文件转换器（这不影响在 Plasma 桌面环境下使用）。</p><p>安装 <a href="https://archlinux.org/packages/extra/any/soundconverter/" target="_blank" rel="noreferrer">SoundConverter</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ezFHs" id="tab-3zzwEb7" checked="checked"><label for="tab-3zzwEb7">extra</label><input type="radio" name="group-ezFHs" id="tab-i5_3gYe"><label for="tab-i5_3gYe">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> soundconverter</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> soundconverter-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+c+'" alt="soundconverter"></p>',53),b=[k];function g(v,m,y,F,C,x){return e(),s("div",null,b)}const B=a(u,[["render",g]]);export{_ as __pageData,B as default};
