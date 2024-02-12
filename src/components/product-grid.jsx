import React from "react";
import CarnelianEarrings from '../images/carnelianEarrings.jpeg';
import InspByColor from '../images/inspirationByColor.jpeg';
import InspByNature from '../images/inspiredByNature.jpeg';
import RedJasper from '../images/redJasperTeardrops.jpeg';

const products = [
    {
      id: 1,
      name: 'Carnelian Earrings',
      href: '#',
      price: '$35',
      imageSrc: CarnelianEarrings,
      imageAlt: 'Pictures of earrings made of the carnelian stone.',
    },
    {
        id: 2,
        name: 'Colors Everywhere',
        href: '#',
        price: '$35',
        imageSrc: InspByColor,
        imageAlt: 'Pictures of earrings and inspiring nature colors surrounding it.',
      },
      {
        id: 3,
        name: 'Red Jasper Teardrop Earrings',
        href: '#',
        price: '$35',
        imageSrc: RedJasper,
        imageAlt: 'Pictures of earrings made of red jasper stones.',
      },
      {
        id: 4,
        name: 'Nature Inspiration',
        href: '#',
        price: '$35',
        imageSrc: InspByNature,
        imageAlt: 'Pictures of earrings surrounded by pictures of nature.',
      },
]; 

const ProductGrid = () => {
    return(
        <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    )
}

export default ProductGrid;