import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Test.module.scss';

interface TestProps {
  className?: string
}

export const Test = (props: TestProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Test, {}, [className])} />
    );
};