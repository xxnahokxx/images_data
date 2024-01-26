import ImagesData from './imagesDate';
import { DateTime } from 'luxon';

const GetBackgroundImageUrl = () => {

    const getGreeting = () => {
        const currentHour = new Date().getHours();
        let greeting: 'morning' | 'afternoon' | 'evening' = 'evening';

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'afternoon';
        }

        return greeting;
    };

    const IMAGES = 10;

    const strToNumber = (str: string): number =>
        str.split('').reduce((acc, current) => acc + current.charCodeAt(0), 0);

    const getImageIndex = (hashable: any) => {
        const stringHashable = String(hashable);
        return (strToNumber(stringHashable) % IMAGES) + 1;
    };

    const currentDate = DateTime.now();
    const formattedDate = currentDate.toFormat('yyyyMMdd');

    let combinedString = `${formattedDate}`;

    const backgroundImageIndex = getImageIndex(combinedString);

    const ImageUrl = ImagesData[getGreeting()][backgroundImageIndex];

    // const containerStyle: React.CSSProperties = {
    //     backgroundImage: `url(${ImageUrl})`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     opacity: 0.9,
    // };

    return ImageUrl;
};

export default GetBackgroundImageUrl;
