import bitcoin from './src/assets/bitcoin.png';
import ethereum from './src/assets/ethereum.png';
import litecoin from './src/assets/litecoin.png';
import tron from './src/assets/tron.png';

export const tableData = [
    {
        title: [ 'NAME', 'DESCRIPTION', 'MARKET CAP', 'VOLUME', 'WEBSITE' ],
        coins: [ 
            {
                name: 'Bitcoin',
                icon: bitcoin,
            },
            {
                name: 'Ethereum',
                icon: ethereum,
            },
            {
                name: 'Litecoin',
                icon: litecoin,
            },
            {
                name: 'Tron',
                icon: tron,
            },
         ],
        // coinIcon: [ bitcoin, ethereum, litecoin, tron ],
        // coinIcon1: bitcoin,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        marketCap: '$252,844,036,453 USD',
        volume: '$30,504,879,301 USD',
        website: 'Visit Website',
    }
]