import './Button.css';

export default function Button( {isBig, children} ) {
  const className = isBig ? 'button button--large' : 'button';
  return <button className={className}>{children}</button>
}