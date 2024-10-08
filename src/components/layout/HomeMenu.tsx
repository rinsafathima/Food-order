'use client'
import React, { useEffect, useState } from 'react'
import MenuItem from '@/types/MenuItem'
import HomeMenuItemCard from './HomeMenuItemCard'
import SectionHeader from './SectionHeader'
import { SectionProps } from '@/types/SectionProps'

const HomeMenu = ({ className }: SectionProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch("/api/menu-items")
      .then(res => res.json())
      .then(menuItems => setMenuItems(menuItems.slice(0, 6)))
  }, [])

  return (
    <section className={`${className} font-amatic px-4 md:px-8`}>
      <SectionHeader
        header={'Hot Pizza Meals'}
        description={'From classic favorites to innovative creations, our hot pizza meals promise a delightful symphony of flavors that will leave you craving for more.'}
      />

      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-lg px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"> Neapolitan</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chicago</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">New York</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sicilian</button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/11730663/pexels-photo-11730663.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/15550301/pexels-photo-15550301/free-photo-of-close-up-of-pizza-with-cheese-and-basil.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/16014994/pexels-photo-16014994/free-photo-of-pizza-on-wooden-tray.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/28236327/pexels-photo-28236327/free-photo-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/9792460/pexels-photo-9792460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/11400975/pexels-photo-11400975.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/12046655/pexels-photo-12046655.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/9471604/pexels-photo-9471604.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/26341214/pexels-photo-26341214/free-photo-of-close-up-of-baked-bread-with-cheese-and-ham.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/13350094/pexels-photo-13350094.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/4617831/pexels-photo-4617831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/17907810/pexels-photo-17907810/free-photo-of-pizza-with-salami.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/2762933/pexels-photo-2762933.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img className="h-auto w-full rounded-lg" src="https://images.pexels.com/photos/19239118/pexels-photo-19239118/free-photo-of-fresh-pepperoni-sausage-pizza.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>

      <div className='grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-4 mt-8'>
        {menuItems && menuItems.map((menuItem, index) => (
          <HomeMenuItemCard key={menuItem._id} menuItem={menuItem} index={index} />
        ))}
      </div>
    </section>
  )
}

export default HomeMenu

