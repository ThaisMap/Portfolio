import { Link } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface ILinkProps {
  href: string;
  children: ReactNode;
}

function LinkMaterial({ href, children }: ILinkProps) {
  return (
    <Link href={href} target='_blank' rel='noreferrer' variant='body1'>
      {children}
    </Link>
  );
}

export default LinkMaterial;
