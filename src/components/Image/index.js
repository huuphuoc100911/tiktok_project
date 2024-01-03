import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, className, fallback: customeFallback = images.noImage, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customeFallback);
    };

    const classes = cx('.wrapper', className);

    return <img className={classes} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
