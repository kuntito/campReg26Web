import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const particleOptions: ISourceOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    background: {
        color: "transparent",
        opacity: 0
    },
    fpsLimit: 120,
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                width: 800,
                height: 800
            }
        },
        color: {
            value: [
                "#D9D9D9",
                "#1E2A49",
                "#939393"
            ]
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
                enable: true,
                speed: 0.5,
                startValue: "random",
                sync: false
            }
        },
        size: {
            value: { min: 0.5, max: 2 },
            animation: {
                enable: true,
                speed: 1,
                startValue: "random",
                sync: false
            }
        },
        move: {
            enable: true,
            speed: { min: 0.2, max: 1 },
            direction: "top",
            random: false,
            straight: false,
            outModes: {
                default: "out",
            },
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200,
                },
            },
        },
    },
    detectRetina: true,
};

export const ParticleLayer = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={particleOptions}
        />
    );
};
