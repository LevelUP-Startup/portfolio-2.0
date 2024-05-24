// HOOKS
import React, { useCallback } from 'react';
// PARTICLES
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import { Engine, IOptions } from 'tsparticles-engine';
// CONTEXT
import { useTheme } from '../context/ThemeContext';
import { loadFirePreset } from 'tsparticles-preset-fire';

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
      ? RecursivePartial<U>[]
      : T[P] extends object
      ? RecursivePartial<T[P]>
      : T[P];
};

const ParticlesBackground = () => {
    const particlesInit = useCallback((engine: Engine) => {
        loadFirePreset(engine)
        return Promise.resolve();
    }, []);

    const {mainColor} = useTheme();

    const particlesConfig: RecursivePartial<IOptions> = {
        
preset:'fire',
         }

    return (
        <div>
            <Particles
                options={particlesConfig}
                init={particlesInit}
            />
        </div>
    );
};

export default ParticlesBackground;

