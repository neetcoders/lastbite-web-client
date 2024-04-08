import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

const ButtonSuccessLarge: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[18px] py-[12px] bg-success-main rounded-[12px] text-typo-white font-bold text-paragraph">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[18px] py-[12px] bg-success-main rounded-[12px] text-typo-white font-bold text-paragraph"
    >
      {text}
    </button>
  );
};

const ButtonSuccessMedium: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[16px] py-[8px] bg-success-main rounded-[12px] text-typo-white font-bold text-bodytext">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[16px] py-[8px] bg-success-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonSuccessSmall: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonPrimaryLarge: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[18px] py-[12px] bg-primary-main rounded-[12px] text-typo-white font-bold text-paragraph">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[18px] py-[12px] bg-primary-main rounded-[12px] text-typo-white font-bold text-paragraph"
    >
      {text}
    </button>
  );
};

const ButtonPrimaryMedium: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[16px] py-[8px] bg-primary-main rounded-[12px] text-typo-white font-bold text-bodytext">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[16px] py-[8px] bg-primary-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonPrimarySmall: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[12px] py-[4px] bg-primary-main rounded-[12px] text-typo-white font-bold text-caption">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[12px] py-[4px] bg-primary-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonWhiteLarge: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[18px] py-[12px] bg-typo-white rounded-[12px] text-typo-main font-bold text-paragraph">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[18px] py-[12px] bg-typo-white rounded-[12px] text-typo-main font-bold text-paragraph"
    >
      {text}
    </button>
  );
};

const ButtonWhiteMedium: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[16px] py-[8px] bg-typo-white rounded-[12px] text-typo-main font-bold text-bodytext">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[16px] py-[8px] bg-typo-white rounded-[12px] text-typo-main font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonWhiteSmall: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[12px] py-[4px] bg-typo-white rounded-[12px] text-typo-main font-bold text-caption">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[12px] py-[4px] bg-typo-white rounded-[12px] text-typo-main font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonBlackLarge: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[18px] py-[12px] bg-typo-main rounded-[12px] text-typo-white font-bold text-paragraph">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[18px] py-[12px] bg-typo-main rounded-[12px] text-typo-white font-bold text-paragraph"
    >
      {text}
    </button>
  );
};

const ButtonBlackMedium: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[16px] py-[8px] bg-typo-main rounded-[12px] text-typo-white font-bold text-bodytext">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[16px] py-[8px] bg-typo-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonBlackSmall: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[12px] py-[4px] bg-typo-main rounded-[12px] text-typo-white font-bold text-caption">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[12px] py-[4px] bg-typo-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonDangerLarge: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[18px] py-[12px] bg-danger-main rounded-[12px] text-typo-white font-bold text-paragraph">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[18px] py-[12px] bg-danger-main rounded-[12px] text-typo-white font-bold text-paragraph"
    >
      {text}
    </button>
  );
};

const ButtonDangerMedium: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[16px] py-[8px] bg-danger-main rounded-[12px] text-typo-white font-bold text-bodytext">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[16px] py-[8px] bg-danger-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

const ButtonDangerSmall: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[12px] py-[4px] bg-danger-main rounded-[12px] text-typo-white font-bold text-caption">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[12px] py-[4px] bg-danger-main rounded-[12px] text-typo-white font-bold text-bodytext"
    >
      {text}
    </button>
  );
};

export {
  ButtonSuccessLarge,
  ButtonSuccessMedium,
  ButtonSuccessSmall,
  ButtonPrimaryLarge,
  ButtonPrimaryMedium,
  ButtonPrimarySmall,
  ButtonWhiteLarge,
  ButtonWhiteMedium,
  ButtonWhiteSmall,
  ButtonBlackLarge,
  ButtonBlackMedium,
  ButtonBlackSmall,
  ButtonDangerLarge,
  ButtonDangerMedium,
  ButtonDangerSmall
};
