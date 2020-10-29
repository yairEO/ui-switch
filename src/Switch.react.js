import React, { useRef, useEffect } from 'react'

const cx = (...list) => list.filter(Boolean).join(' ')

const getCustomProps = cssProps =>
  Object.entries(cssProps).reduce((acc, [key, val]) => key ? {...acc, [`--${key}`]:val} : acc, {})

const Switch = ({
  checked,
  defaultChecked,
  onChange,
  children,
  tabIndex,
  className,
  textRight,
  disabled,
  indeterminate,
  ...cssVars
}) => {
  const inputRef = useRef()

  useEffect(()=> {
    inputRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <label
      className={cx('switch',
        textRight && 'switch--textRight',
        // checked && 'switch--checked',   // if uncontrolled, would require an event listener to determine if checked
        className)}
      style={getCustomProps(cssVars)}>
      <input
        type="checkbox"
        ref={inputRef}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        tabIndex={tabIndex||0}
        disabled={disabled}
        className="switch__input"
        />
      <div className='switch__gfx'></div>
      { children && <div className='switch__label'>{children}</div> }
    </label>
  )
}

export default Switch;