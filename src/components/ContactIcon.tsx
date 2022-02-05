import React from 'react';

type IconProps = {
    icon: string,
    href: string
}

export default function ContactIcon({icon, href}: IconProps) {
  return(
    <a href={href} rel="noopener noreferrer" target="_blank">
        <i className={icon} />
    </a>
  );
}
