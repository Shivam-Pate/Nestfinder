import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[390px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[30px] sm:h-[280px] w-full object-cover hover:scale-105 transition-scale duration-300 '
        />
        <div className='p-3 flex flex-col gap-2  border-r border-b border-l border-solid border-slate-900'>
          <p className='truncate text-2xl font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-6 w-6 text-green-700' />
            <p className='text-sm text-gray-500 truncate text-[18px] font-medium  w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-lg text-gray-500 font-medium line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-700 mt-2 font-semibold text-xl'>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          
        </div>
      </Link>
    </div>
  );
}