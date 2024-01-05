import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ suggestedAccounts, followingAccounts, popup }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={suggestedAccounts} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {popup ? (
                <Tippy interactive offset={[-20, 0]} placement="bottom" delay={[800, 0]} render={renderPreview}>
                    <Link to={`/profile/${suggestedAccounts.nickname}`}>
                        <div className={cx('account-item')}>
                            <Image
                                className={cx('avatar')}
                                src={suggestedAccounts.avatar}
                                alt={suggestedAccounts.nickname}
                            />
                            <div className={cx('item-info')}>
                                <p className={cx('nickname')}>
                                    <strong>{suggestedAccounts.nickname} </strong>
                                    {suggestedAccounts.tick && (
                                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                    )}
                                </p>
                                <p className={cx('name')}>{suggestedAccounts.full_name}</p>
                            </div>
                        </div>
                    </Link>
                </Tippy>
            ) : (
                <Link to={`/profile/${followingAccounts.nickname}`}>
                    <div className={cx('account-item')}>
                        <Image
                            className={cx('avatar')}
                            src={followingAccounts.avatar}
                            alt={followingAccounts.nickname}
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{followingAccounts.nickname}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>{followingAccounts.full_name}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}

AccountItem.propTypes = {
    suggestedAccounts: PropTypes.object.isRequired,
    followingAccounts: PropTypes.object.isRequired,
    popup: PropTypes.bool,
};

export default AccountItem;
