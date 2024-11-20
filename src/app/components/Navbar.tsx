import React from 'react';

function Navbar() {
	return (
		<nav className="font-[family-name:var(--font-poppins)] bg-slate-800 h-20 row-start-3 flex gap-6 flex-wrap items-center justify-between px-40">
			<div>LOGO</div>
      <div>
        <ul className='flex flex-row gap-10'>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </div>
		</nav>
	);
}

export default Navbar;
