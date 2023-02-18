"use strict";
document.addEventListener('DOMContentLoaded', function () {


    const modalBtns = document.querySelectorAll('.works-card');
    const modalOverlay = document.querySelectorAll('.modal-wrapper');
    const modals = document.querySelectorAll('.modal');
    const btnСloseModal = document.querySelectorAll('.btn--close-modal');
    const body = document.querySelector('.body');
    const anchors = document.querySelectorAll('.link-transition')
    const parallax = document.querySelectorAll('.modal-wrapper');
    // var swiper = new Swiper(".swiper-container_1", {
    //   spaceBetween: 30,
    //   slidesPerView: 3,
    //   centeredSlides: true,
    //   loop: true,
    //   breakpoints: {
    //     // when window width is <= 499px
    //     499: {
    //       slidesPerView: 6,
    //     },

    //     999: {
    //       slidesPerView: 8,
    //     },
    //   },
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });
    // var swiper1 = new Swiper(".swiper-container_2", {
    //   spaceBetween: 30,
    //   slidesPerView: 3,
    //   centeredSlides: true,
    //   loop: true,
    //   breakpoints: {
    //     // when window width is <= 499px
    //     499: {
    //       slidesPerView: 6,
    //     },

    //     999: {
    //       slidesPerView: 8,
    //     },
    //   },
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

    modalBtns.forEach((el) => {

        el.addEventListener('click', (e) => {
            console.log(el);

            let path = e.currentTarget.getAttribute('data-path');
            el.classList.add('active')
            modals.forEach((el) => {
                el.classList.remove('modal--open');
            });
            console.log(`[data-target="${path}"]`, "[data-target=path]", e.currentTarget.getAttribute('data-path'), " e.currentTarget.getAttribute('data-path')");
            document.querySelector(`[data-target="${path}"]`).classList.add('modal--open');
            body.classList.add('active');
        });
    });

    btnСloseModal.forEach((el) => {
        el.addEventListener('click', (e) => {
            // console.log(el, "el btnСloseModal")
            modals.forEach((el) => {
                el.classList.remove('modal--open');
                el.classList.remove('active');
            });
            modalBtns.forEach((el) => {
                el.classList.remove('active');
            });
            body.classList.remove('active');


        });
    });

    modals.forEach((el) => {
        el.addEventListener('click', (e) => {

            if (e.currentTarget.classList.contains !== "modal-wrapper") {
                modalBtns.forEach((el) => {
                    el.classList.remove('active');
                });
                modals.forEach((el) => {
                    // console.log(el, "el e.currentTarget.classList.contains")
                    el.classList.remove('modal--open');

                });
                body.classList.remove('active');
            }

        });
    });



    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }





    parallax.forEach((el) => {
 
        el.addEventListener('scroll', (e) => {

            const content = document.querySelectorAll('.content-1')
            const content2 = document.querySelectorAll('.content-2')
            const content3 = document.querySelectorAll('.content-3')
            const content5 = document.querySelectorAll('.content-5')
            let sum = el.scrollTop / 40;
            let sum2 = el.scrollTop / 55;
            let sum3 = el.scrollTop / 55;
            let sum5 = el.scrollTop / 55;
            content.forEach((ell) => {
                ell.style.transform = `scale(1.3) translate(0%,-${sum + 1}%)`;
            });
            content2.forEach((ell) => {
                ell.style.transform = `scale(1.7) translate(0%,${sum2 - 20}%)`;
            });
            content3.forEach((ell) => {
                ell.style.transform = `scale(1.5) translate(0%,${sum2 + 15}%)`;
            });
            content5.forEach((ell) => {
                ell.style.transform = `scale(1.2) translate(0%,${sum2 - 10}%)`;
            });
        });

    });


    setTimeout(() => {

        const canvas = document.getElementById("rainbow");
        canvas.width = canvas.clientWidth, canvas.height = canvas.clientHeight;
        let config = {
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 512,
            DENSITY_DISSIPATION: .97,
            VELOCITY_DISSIPATION: .93,
            PRESSURE_DISSIPATION: .8,
            PRESSURE_ITERATIONS: 20,
            CURL: 30,
            SPLAT_RADIUS: .3,
            SHADING: !0,
            COLORFUL: !0,
            PAUSED: !1,
            BACK_COLOR: {
                r: 0,
                g: 0,
                b: 0
            },
            TRANSPARENT: !1,
            BLOOM: !0,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: .8,
            BLOOM_THRESHOLD: .6,
            BLOOM_SOFT_KNEE: .7
            // SIM_RESOLUTION: 128,
            // DYE_RESOLUTION: 512,
            // // DENSITY_DISSIPATION: .97,
            // DENSITY_DISSIPATION: .96,
            // VELOCITY_DISSIPATION: .98,
            // PRESSURE_DISSIPATION: .8,
            // PRESSURE_ITERATIONS: 20,
            // CURL: 30,
            // SPLAT_RADIUS: .05,
            // SHADING: !0,
            // COLORFUL: !0,
            // PAUSED: !1,
            // BACK_COLOR: {
            //     r: 0,
            //          g: 0,
            //          b: 0,
            // },
            // TRANSPARENT: !1,
            // BLOOM: !1,
            // BLOOM_ITERATIONS: 8,
            // BLOOM_RESOLUTION: 256,
            // BLOOM_INTENSITY: .8,
            // BLOOM_THRESHOLD: .6,
            // BLOOM_SOFT_KNEE: .7
        };

        function pointerPrototype() {
            this.id = -1, this.x = 0, this.y = 0, this.dx = 0, this.dy = 0, this.down = !1, this.moved = !1, this.color = [30, 0, 300]
        }
        let pointers = [],
            splatStack = [],
            bloomFramebuffers = [];
        pointers.push(new pointerPrototype);
        const {
            gl: gl,
            ext: ext
        } = getWebGLContext(canvas);

        function getWebGLContext(e) {
            const r = {
                alpha: !0,
                depth: !1,
                stencil: !1,
                antialias: !1,
                preserveDrawingBuffer: !1
            };
            let t = e.getContext("webgl2", r);
            const i = !!t;
            let n, o;
            i || (t = e.getContext("webgl", r) || e.getContext("experimental-webgl", r)), i ? (t.getExtension("EXT_color_buffer_float"), o = t.getExtension("OES_texture_float_linear")) : (n = t.getExtension("OES_texture_half_float"), o = t.getExtension("OES_texture_half_float_linear")), t.clearColor(0, 0, 0, 1);
            const a = i ? t.HALF_FLOAT : n.HALF_FLOAT_OES;
            let l, g, u;
            return i ? (l = getSupportedFormat(t, t.RGBA16F, t.RGBA, a), g = getSupportedFormat(t, t.RG16F, t.RG, a), u = getSupportedFormat(t, t.R16F, t.RED, a)) : (l = getSupportedFormat(t, t.RGBA, t.RGBA, a), g = getSupportedFormat(t, t.RGBA, t.RGBA, a), u = getSupportedFormat(t, t.RGBA, t.RGBA, a)), {
                gl: t,
                ext: {
                    formatRGBA: l,
                    formatRG: g,
                    formatR: u,
                    halfFloatTexType: a,
                    supportLinearFiltering: o
                }
            }
        }

        function getSupportedFormat(e, r, t, i) {
            if (!supportRenderTextureFormat(e, r, t, i)) switch (r) {
                case e.R16F:
                    return getSupportedFormat(e, e.RG16F, e.RG, i);
                case e.RG16F:
                    return getSupportedFormat(e, e.RGBA16F, e.RGBA, i);
                default:
                    return null
            }
            return {
                internalFormat: r,
                format: t
            }
        }

        function supportRenderTextureFormat(e, r, t, i) {
            let n = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, r, 4, 4, 0, t, i, null);
            let o = e.createFramebuffer();
            return e.bindFramebuffer(e.FRAMEBUFFER, o), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.checkFramebufferStatus(e.FRAMEBUFFER) == e.FRAMEBUFFER_COMPLETE
        }

        function captureScreenshot() {
            colorProgram.bind(), gl.uniform4f(colorProgram.uniforms.color, 0, 0, 0, 1), blit(density.write.fbo), render(density.write.fbo), gl.bindFramebuffer(gl.FRAMEBUFFER, density.write.fbo);
            let e = dyeWidth * dyeHeight * 4,
                r = new Float32Array(e);
            gl.readPixels(0, 0, dyeWidth, dyeHeight, gl.RGBA, gl.FLOAT, r);
            let t = new Uint8Array(e),
                i = 0;
            for (let e = dyeHeight - 1; e >= 0; e--)
                for (let n = 0; n < dyeWidth; n++) {
                    let o = e * dyeWidth * 4 + 4 * n;
                    t[o + 0] = 255 * clamp01(r[i + 0]), t[o + 1] = 255 * clamp01(r[i + 1]), t[o + 2] = 255 * clamp01(r[i + 2]), t[o + 3] = 255 * clamp01(r[i + 3]), i += 4
                }
            let n = document.createElement("canvas"),
                o = n.getContext("2d");
            n.width = dyeWidth, n.height = dyeHeight;
            let a = o.createImageData(dyeWidth, dyeHeight);
            a.data.set(t), o.putImageData(a, 0, 0);
            let l = n.toDataURL();
            downloadURI("fluid.png", l), URL.revokeObjectURL(l)
        }

        function clamp01(e) {
            return Math.min(Math.max(e, 0), 1)
        }

        function downloadURI(e, r) {
            let t = document.createElement("a");
            t.download = e, t.href = r, document.body.appendChild(t), t.click(), document.body.removeChild(t)
        }

        function isMobile() {
            return /Mobi|Android/i.test(navigator.userAgent)
        }
        isMobile() && (config.SHADING = !1), ext.supportLinearFiltering || (config.SHADING = !1, config.BLOOM = !1);
        class GLProgram {
            constructor(e, r) {
                if (this.uniforms = {}, this.program = gl.createProgram(), gl.attachShader(this.program, e), gl.attachShader(this.program, r), gl.linkProgram(this.program), !gl.getProgramParameter(this.program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(this.program);
                const t = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
                for (let e = 0; e < t; e++) {
                    const r = gl.getActiveUniform(this.program, e).name;
                    this.uniforms[r] = gl.getUniformLocation(this.program, r)
                }
            }
            bind() {
                gl.useProgram(this.program)
            }
        }

        function compileShader(e, r) {
            const t = gl.createShader(e);
            if (gl.shaderSource(t, r), gl.compileShader(t), !gl.getShaderParameter(t, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(t);
            return t
        }
        const baseVertexShader = compileShader(gl.VERTEX_SHADER, "\n    precision highp float;\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),
            clearShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),
            colorShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    uniform vec4 color;\n    void main () {\n        gl_FragColor = color;\n    }\n"),
            backgroundShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n    #define SCALE 25.0\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"),
            displayShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
            displayBloomShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
            displayShadingShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform vec2 texelSize;\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C.rgb *= diffuse;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
            displayBloomShadingShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C *= diffuse;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
            bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"),
            bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"),
            bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"),
            splatShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"),
            advectionManualFilteringShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n    void main () {\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n        gl_FragColor.a = 1.0;\n    }\n"),
            advectionShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"),
            divergenceShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"),
            curlShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"),
            vorticityShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"),
            pressureShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uncomment if you use wrap or repeat texture mode\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"),
            gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"),
            blit = (() => (gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()), gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW), gl.vertexAttribPointer(0, 2, gl.FLOAT, !1, 0, 0), gl.enableVertexAttribArray(0), e => {
                gl.bindFramebuffer(gl.FRAMEBUFFER, e), gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
            }))();
        let simWidth, simHeight, dyeWidth, dyeHeight, density, velocity, divergence, curl, pressure, bloom, ditheringTexture = createTextureAsync("");
        const clearProgram = new GLProgram(baseVertexShader, clearShader),
            colorProgram = new GLProgram(baseVertexShader, colorShader),
            backgroundProgram = new GLProgram(baseVertexShader, backgroundShader),
            displayProgram = new GLProgram(baseVertexShader, displayShader),
            displayBloomProgram = new GLProgram(baseVertexShader, displayBloomShader),
            displayShadingProgram = new GLProgram(baseVertexShader, displayShadingShader),
            displayBloomShadingProgram = new GLProgram(baseVertexShader, displayBloomShadingShader),
            bloomPrefilterProgram = new GLProgram(baseVertexShader, bloomPrefilterShader),
            bloomBlurProgram = new GLProgram(baseVertexShader, bloomBlurShader),
            bloomFinalProgram = new GLProgram(baseVertexShader, bloomFinalShader),
            splatProgram = new GLProgram(baseVertexShader, splatShader),
            advectionProgram = new GLProgram(baseVertexShader, ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader),
            divergenceProgram = new GLProgram(baseVertexShader, divergenceShader),
            curlProgram = new GLProgram(baseVertexShader, curlShader),
            vorticityProgram = new GLProgram(baseVertexShader, vorticityShader),
            pressureProgram = new GLProgram(baseVertexShader, pressureShader),
            gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

        function initFramebuffers() {
            let e = getResolution(config.SIM_RESOLUTION),
                r = getResolution(config.DYE_RESOLUTION);
            simWidth = e.width, simHeight = e.height, dyeWidth = r.width, dyeHeight = r.height;
            const t = ext.halfFloatTexType,
                i = ext.formatRGBA,
                n = ext.formatRG,
                o = ext.formatR,
                a = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
            density = null == density ? createDoubleFBO(dyeWidth, dyeHeight, i.internalFormat, i.format, t, a) : resizeDoubleFBO(density, dyeWidth, dyeHeight, i.internalFormat, i.format, t, a), velocity = null == velocity ? createDoubleFBO(simWidth, simHeight, n.internalFormat, n.format, t, a) : resizeDoubleFBO(velocity, simWidth, simHeight, n.internalFormat, n.format, t, a), divergence = createFBO(simWidth, simHeight, o.internalFormat, o.format, t, gl.NEAREST), curl = createFBO(simWidth, simHeight, o.internalFormat, o.format, t, gl.NEAREST), pressure = createDoubleFBO(simWidth, simHeight, o.internalFormat, o.format, t, gl.NEAREST), initBloomFramebuffers()
        }

        function initBloomFramebuffers() {
            let e = getResolution(config.BLOOM_RESOLUTION);
            const r = ext.halfFloatTexType,
                t = ext.formatRGBA,
                i = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
            bloom = createFBO(e.width, e.height, t.internalFormat, t.format, r, i), bloomFramebuffers.length = 0;

            for (let n = 0; n < config.BLOOM_ITERATIONS; n++) {
                let o = e.width >> n + 1,
                    a = e.height >> n + 1;
                if (o < 2 || a < 2) break;
                let l = createFBO(o, a, t.internalFormat, t.format, r, i);
                bloomFramebuffers.push(l)
            }
        }

        function createFBO(e, r, t, i, n, o) {
            gl.activeTexture(gl.TEXTURE0);
            let a = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, a), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, o), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, o), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texImage2D(gl.TEXTURE_2D, 0, t, e, r, 0, i, n, null);
            let l = gl.createFramebuffer();
            return gl.bindFramebuffer(gl.FRAMEBUFFER, l), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, a, 0), gl.viewport(0, 0, e, r), gl.clear(gl.COLOR_BUFFER_BIT), {
                texture: a,
                fbo: l,
                width: e,
                height: r,
                attach: e => (gl.activeTexture(gl.TEXTURE0 + e), gl.bindTexture(gl.TEXTURE_2D, a), e)
            }
        }

        function createDoubleFBO(e, r, t, i, n, o) {
            let a = createFBO(e, r, t, i, n, o),
                l = createFBO(e, r, t, i, n, o);
            return {
                get read() {
                    return a
                },
                set read(e) {
                    a = e
                },
                get write() {
                    return l
                },
                set write(e) {
                    l = e
                },
                swap() {
                    let e = a;
                    a = l, l = e
                }
            }
        }

        function resizeFBO(e, r, t, i, n, o, a) {
            let l = createFBO(r, t, i, n, o, a);
            return clearProgram.bind(), gl.uniform1i(clearProgram.uniforms.uTexture, e.attach(0)), gl.uniform1f(clearProgram.uniforms.value, 1), blit(l.fbo), l
        }

        function resizeDoubleFBO(e, r, t, i, n, o, a) {
            return e.read = resizeFBO(e.read, r, t, i, n, o, a), e.write = createFBO(r, t, i, n, o, a), e
        }

        function createTextureAsync(e) {
            let r = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, r), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
            let t = {
                    texture: r,
                    width: 1,
                    height: 1,
                    attach: e => (gl.activeTexture(gl.TEXTURE0 + e), gl.bindTexture(gl.TEXTURE_2D, r), e)
                },
                i = new Image;
            return i.onload = (() => {
                t.width = i.width, t.height = i.height, gl.bindTexture(gl.TEXTURE_2D, r), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, i)
            }), i.src = e, t
        }
        //   initFramebuffers(), multipleSplats(parseInt(20 * Math.random()) + 5);
        initFramebuffers()
        let lastColorChangeTime = Date.now();

        function update() {
            resizeCanvas(), input(), config.PAUSED || step(.016), render(null), requestAnimationFrame(update)
        }

        function input() {
            splatStack.length > 0 && multipleSplats(splatStack.pop());
            for (let e = 0; e < pointers.length; e++) {
                const r = pointers[e];
                r.moved && (splat(r.x, r.y, r.dx, r.dy, r.color), r.moved = !1)
            }
            if (config.COLORFUL && lastColorChangeTime + 100 < Date.now()) {
                lastColorChangeTime = Date.now();
                for (let e = 0; e < pointers.length; e++) {
                    pointers[e].color = generateColor()
                }
            }
        }

        function step(e) {
            gl.disable(gl.BLEND), gl.viewport(0, 0, simWidth, simHeight), curlProgram.bind(), gl.uniform2f(curlProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0)), blit(curl.fbo), vorticityProgram.bind(), gl.uniform2f(vorticityProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0)), gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1)), gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL), gl.uniform1f(vorticityProgram.uniforms.dt, e), blit(velocity.write.fbo), velocity.swap(), divergenceProgram.bind(), gl.uniform2f(divergenceProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0)), blit(divergence.fbo), clearProgram.bind(), gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0)), gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION), blit(pressure.write.fbo), pressure.swap(), pressureProgram.bind(), gl.uniform2f(pressureProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
            for (let e = 0; e < config.PRESSURE_ITERATIONS; e++) gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1)), blit(pressure.write.fbo), pressure.swap();
            gradienSubtractProgram.bind(), gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0)), gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1)), blit(velocity.write.fbo), velocity.swap(), advectionProgram.bind(), gl.uniform2f(advectionProgram.uniforms.texelSize, 1 / simWidth, 1 / simHeight), ext.supportLinearFiltering || gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, 1 / simWidth, 1 / simHeight);
            let r = velocity.read.attach(0);
            gl.uniform1i(advectionProgram.uniforms.uVelocity, r), gl.uniform1i(advectionProgram.uniforms.uSource, r), gl.uniform1f(advectionProgram.uniforms.dt, e), gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION), blit(velocity.write.fbo), velocity.swap(), gl.viewport(0, 0, dyeWidth, dyeHeight), ext.supportLinearFiltering || gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, 1 / dyeWidth, 1 / dyeHeight), gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0)), gl.uniform1i(advectionProgram.uniforms.uSource, density.read.attach(1)), gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION), blit(density.write.fbo), density.swap()
        }

        function render(e) {
            config.BLOOM && applyBloom(density.read, bloom), null != e && config.TRANSPARENT ? gl.disable(gl.BLEND) : (gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA), gl.enable(gl.BLEND));
            let r = null == e ? gl.drawingBufferWidth : dyeWidth,
                t = null == e ? gl.drawingBufferHeight : dyeHeight;
            if (gl.viewport(0, 0, r, t), !config.TRANSPARENT) {
                colorProgram.bind();
                let r = config.BACK_COLOR;
                gl.uniform4f(colorProgram.uniforms.color, r.r / 255, r.g / 255, r.b / 255, 1), blit(e)
            }
            if (null == e && config.TRANSPARENT && (backgroundProgram.bind(), gl.uniform1f(backgroundProgram.uniforms.aspectRatio, canvas.width / canvas.height), blit(null)), config.SHADING) {
                let e = config.BLOOM ? displayBloomShadingProgram : displayShadingProgram;
                if (e.bind(), gl.uniform2f(e.uniforms.texelSize, 1 / r, 1 / t), gl.uniform1i(e.uniforms.uTexture, density.read.attach(0)), config.BLOOM) {
                    gl.uniform1i(e.uniforms.uBloom, bloom.attach(1)), gl.uniform1i(e.uniforms.uDithering, ditheringTexture.attach(2));
                    let i = getTextureScale(ditheringTexture, r, t);
                    gl.uniform2f(e.uniforms.ditherScale, i.x, i.y)
                }
            } else {
                let e = config.BLOOM ? displayBloomProgram : displayProgram;
                if (e.bind(), gl.uniform1i(e.uniforms.uTexture, density.read.attach(0)), config.BLOOM) {
                    gl.uniform1i(e.uniforms.uBloom, bloom.attach(1)), gl.uniform1i(e.uniforms.uDithering, ditheringTexture.attach(2));
                    let i = getTextureScale(ditheringTexture, r, t);
                    gl.uniform2f(e.uniforms.ditherScale, i.x, i.y)
                }
            }
            blit(e)
        }

        function applyBloom(e, r) {
            if (bloomFramebuffers.length < 2) return;
            let t = r;
            gl.disable(gl.BLEND), bloomPrefilterProgram.bind();
            let i = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 1e-4,
                n = config.BLOOM_THRESHOLD - i,
                o = 2 * i,
                a = .25 / i;
            gl.uniform3f(bloomPrefilterProgram.uniforms.curve, n, o, a), gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD), gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, e.attach(0)), gl.viewport(0, 0, t.width, t.height), blit(t.fbo), bloomBlurProgram.bind();
            for (let e = 0; e < bloomFramebuffers.length; e++) {
                let r = bloomFramebuffers[e];
                gl.uniform2f(bloomBlurProgram.uniforms.texelSize, 1 / t.width, 1 / t.height), gl.uniform1i(bloomBlurProgram.uniforms.uTexture, t.attach(0)), gl.viewport(0, 0, r.width, r.height), blit(r.fbo), t = r
            }
            gl.blendFunc(gl.ONE, gl.ONE), gl.enable(gl.BLEND);
            for (let e = bloomFramebuffers.length - 2; e >= 0; e--) {
                let r = bloomFramebuffers[e];
                gl.uniform2f(bloomBlurProgram.uniforms.texelSize, 1 / t.width, 1 / t.height), gl.uniform1i(bloomBlurProgram.uniforms.uTexture, t.attach(0)), gl.viewport(0, 0, r.width, r.height), blit(r.fbo), t = r
            }
            gl.disable(gl.BLEND), bloomFinalProgram.bind(), gl.uniform2f(bloomFinalProgram.uniforms.texelSize, 1 / t.width, 1 / t.height), gl.uniform1i(bloomFinalProgram.uniforms.uTexture, t.attach(0)), gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY), gl.viewport(0, 0, r.width, r.height), blit(r.fbo)
        }

        function splat(e, r, t, i, n) {
            gl.viewport(0, 0, simWidth, simHeight), splatProgram.bind(), gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0)), gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height), gl.uniform2f(splatProgram.uniforms.point, e / canvas.width, 1 - r / canvas.height), gl.uniform3f(splatProgram.uniforms.color, t, -i, 1), gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100), blit(velocity.write.fbo), velocity.swap(), gl.viewport(0, 0, dyeWidth, dyeHeight), gl.uniform1i(splatProgram.uniforms.uTarget, density.read.attach(0)), gl.uniform3f(splatProgram.uniforms.color, n.r, n.g, n.b), blit(density.write.fbo), density.swap()
        }

        function multipleSplats(e) {
            for (let r = 0; r < e; r++) {
                const e = generateColor();
                e.r *= 10, e.g *= 10, e.b *= 10, splat(canvas.width * Math.random(), canvas.height * Math.random(), 1e3 * (Math.random() - .5), 1e3 * (Math.random() - .5), e)
            }
        }

        function resizeCanvas() {
            canvas.width == canvas.clientWidth && canvas.height == canvas.clientHeight || (canvas.width = canvas.clientWidth, canvas.height = canvas.clientHeight, initFramebuffers())
        }

        // function generateColor() {
        //     // let e = HSVtoRGB(Math.random(), 1, 1);
        //     let e = HSVtoRGB(255, (Math.random() * (174 - 145) + 145), (Math.random() * (27 - 17) + 17));
        //     // return e.r = 255, e.g = 174, e.b = 17, e
        //     // return e.r *= .15, e.g *= .15, e.b *= .15, e
        //     return e.r = 255, e.g = 174, e.b = .3, e

        // }
        function generateColor() {
            let e = HSVtoRGB(Math.random(), 1, 1);
            return e.r *= .15,
            e.g *= .15,
            e.b *= .15,
            e
        }

        function HSVtoRGB(e, r, t) {
            let i, n, o, a, l, g, u, m;
            switch (g = t * (1 - r), u = t * (1 - (l = 6 * e - (a = Math.floor(6 * e))) * r), m = t * (1 - (1 - l) * r), a % 6) {
                case 0:
                    i = t, n = m, o = g;
                    break;
                case 1:
                    i = u, n = t, o = g;
                    break;
                case 2:
                    i = g, n = t, o = m;
                    break;
                case 3:
                    i = g, n = u, o = t;
                    break;
                case 4:
                    i = m, n = g, o = t;
                    break;
                case 5:
                    i = t, n = g, o = u
            }
            return {
                r: i,
                g: n,
                b: o
            }
        }

        function getResolution(e) {
            let r = gl.drawingBufferWidth / gl.drawingBufferHeight;
            r < 1 && (r = 1 / r);
            let t = Math.round(e * r),
                i = Math.round(e);
            return gl.drawingBufferWidth > gl.drawingBufferHeight ? {
                width: t,
                height: i
            } : {
                width: i,
                height: t
            }
        }

        function getTextureScale(e, r, t) {
            return {
                x: r / e.width,
                y: t / e.height
            }
        }
        update(), canvas.addEventListener("mousemove", e => {
            pointers[0].moved = pointers[0].down, pointers[0].dx = 5 * (e.offsetX - pointers[0].x), pointers[0].dy = 5 * (e.offsetY - pointers[0].y), pointers[0].x = e.offsetX, pointers[0].y = e.offsetY, pointers[0].down = !0, pointers[0].color = generateColor()
        }), canvas.addEventListener("touchmove", e => {
            e.preventDefault();
            const r = e.targetTouches;
            for (let e = 0; e < r.length; e++) {
                let t = pointers[e];
                t.moved = t.down, t.dx = 8 * (r[e].pageX - t.x), t.dy = 8 * (r[e].pageY - t.y), t.x = r[e].pageX, t.y = r[e].pageY
            }
        }, !1), canvas.addEventListener("touchstart", e => {
            e.preventDefault();
            const r = e.targetTouches;
            for (let e = 0; e < r.length; e++) e >= pointers.length && pointers.push(new pointerPrototype), pointers[e].id = r[e].identifier, pointers[e].down = !0, pointers[e].x = r[e].pageX, pointers[e].y = r[e].pageY, pointers[e].color = generateColor()
        }), window.addEventListener("mouseup", () => {
            pointers[0].down = !1
        }), window.addEventListener("touchend", e => {
            const r = e.changedTouches;
            for (let e = 0; e < r.length; e++)
                for (let t = 0; t < pointers.length; t++) r[e].identifier == pointers[t].id && (pointers[t].down = !1)
        });
    }, 2000)
}, false);