import React from 'react';

import { RiReactjsLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';
import { DiNodejs } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Tech: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsFill className="text-7xl text-white-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineConsoleSql className="text-7xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
