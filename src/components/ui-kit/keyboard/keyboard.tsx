import React, { ReactElement } from 'react';
import styles from './keyboard.module.css';
import { Button, ButtonProps } from '../button/button';
import clsx from 'clsx';

export interface TKeyboard {
	className?: string;
	clickKey: (value: any) => void;
}

export function KeyboardUI({className, clickKey} : TKeyboard) : ReactElement {
	return (
		<div className={clsx(styles.keyboard, className)}>
			<Button text="+" onClick={clickKey}
				className={clsx(styles.button, styles.plus, styles.operation)}/>
			<Button text="*" onClick={clickKey}
				className={clsx(styles.button, styles.multy, styles.operation)}/>
			<Button text="-" onClick={clickKey}
				className={clsx(styles.button, styles.minus, styles.operation)}/>
			<Button text="/" onClick={clickKey}
				className={clsx(styles.button, styles.division, styles.operation)}/>
			<Button text="1" onClick={clickKey}
				className={clsx(styles.button, styles.one)}/>
			<Button text="2" onClick={clickKey}
				className={clsx(styles.button, styles.too)}/>
			<Button text="3" onClick={clickKey}
				className={clsx(styles.button, styles.three)}/>
			<Button text="4" onClick={clickKey}
				className={clsx(styles.button, styles.four)}/>
			<Button text="5" onClick={clickKey}
				className={clsx(styles.button, styles.five)}/>
			<Button text="6" onClick={clickKey}
				className={clsx(styles.button, styles.six)}/>
			<Button text="7" onClick={clickKey}
				className={clsx(styles.button, styles.seven)}/>
			<Button text="8" onClick={clickKey}
				className={clsx(styles.button, styles.eight)}/>
			<Button text="9" onClick={clickKey}
				className={clsx(styles.button, styles.nine)}/>
			<Button text="0" onClick={clickKey}
				className={clsx(styles.button, styles.zero)}/>
			<Button text="C" onClick={clickKey}
				className={clsx(styles.button, styles.clear)}/>
			<Button text="=" onClick={clickKey}
				className={clsx(styles.button, styles.res)}/>
			<Button text="," onClick={clickKey}
				className={clsx(styles.button, styles.dot)}/>
			<Button text="←" onClick={clickKey}
				className={clsx(styles.button, styles.remove)}/>
		</div>
	)
}