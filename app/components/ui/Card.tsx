// app/components/ui/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  price?: string;
  actions?: React.ReactNode[];
  variant?: 'default' | 'primary' | 'secondary'; // Example variants
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Card: React.FC<CardProps> = ({ title, subtitle, price, actions, variant = 'default', image, imageWidth = 500, imageHeight = 300, children, ...props }) => {
  return (
    <div className={`card card-${variant}`} {...props}>
      {image && <Image src={image} alt={title || 'Card image'} width={imageWidth} height={imageHeight} />}
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
      {price && <span className="price">{price}</span>}
      {children}
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};

export default Card;
