import Link from "next/link";
import React from "react";

interface IProps {
  path: string;
  label: string;
}

const NavButton: React.FC<IProps> = (props: IProps) => {
  return (
    <Link href={props.path}>
      <div className="nav-button">
        <span className="label">{props.label}</span>
      </div>
    </Link>
  );
};

export default NavButton;
