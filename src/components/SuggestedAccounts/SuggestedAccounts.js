import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import * as accountService from '~/services/accountService';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, btnMore = false, popup = false }) {
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    const [followingAccounts, setFollowingAccounts] = useState([]);

    useEffect(() => {
        const suggestedAccountsApi = async () => {
            const result = await accountService.suggested();

            setSuggestedAccounts(result);
        };

        suggestedAccountsApi();
    }, []);

    useEffect(() => {
        const followingAccountsApi = async () => {
            const result = await accountService.following();

            setFollowingAccounts(result);
        };

        followingAccountsApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {popup ? (
                <>
                    {suggestedAccounts.map((account) => (
                        <AccountItem key={account.id} suggestedAccounts={account} followingAccounts={{}} popup />
                    ))}
                </>
            ) : (
                <>
                    {followingAccounts.map((account) => (
                        <AccountItem key={account.id} followingAccounts={account} suggestedAccounts={{}} />
                    ))}
                </>
            )}

            {btnMore && <p className={cx('more-btn')}>See all</p>}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    btnMore: PropTypes.bool,
    popup: PropTypes.bool,
};

export default SuggestedAccounts;
