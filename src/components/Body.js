import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";

const Body = function () {
  // Creates local State variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    console.log("Use effect called");
    let fetchData = async () => {
      let responseObject = await fetch(
        "https://swiggy-api-4c740.web.app/swiggy-api.json"
      );
      let finalData = await responseObject.json();
      console.log(finalData);
      // Update State & re-render with new Data
      // setListOfRestaurants(finalData);

      /* 🙂 currently, i don't have correct API url to get data and render.
         🙂 in the future, i will do it. 
      */

      // Testing with 'Fake-immitated-data' similar to API fetched new data.
      setListOfRestaurants([
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "234875",
            name: "Adil Hotel",
            cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
            locality: "Rautha Wada",
            areaName: "Chhindwara Locality",
            costForTwo: "₹150 for two",
            cuisines: ["Biryani", "Tandoor"],
            avgRating: 4.4,
            parentId: "27123",
            avgRatingString: "4.4",
            totalRatingsString: "1.4K+",
            sla: {
              deliveryTime: 55,
              lastMileTravel: 12.6,
              serviceability: "SERVICEABLE",
              slaString: "50-60 mins",
              lastMileTravelString: "12.6 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-09-25 00:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-dd28e4ee-a3cc-479f-b852-52aef8f8ac7a",
          },
          cta: {
            link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "151518",
            name: "Bakery World",
            cloudinaryImageId: "mt2aggiscfl3yviatwng",
            locality: "Parasia Road",
            areaName: "Parasia Road",
            costForTwo: "₹250 for two",
            cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
            avgRating: 4.3,
            veg: true,
            parentId: "40363",
            avgRatingString: "4.3",
            totalRatingsString: "293",
            sla: {
              deliveryTime: 50,
              lastMileTravel: 14.1,
              serviceability: "SERVICEABLE",
              slaString: "45-50 mins",
              lastMileTravelString: "14.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-09-24 22:30:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "ITEMS",
              subHeader: "AT ₹99",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-dd28e4ee-a3cc-479f-b852-52aef8f8ac7a",
          },
          cta: {
            link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            console.log("Button clicked!");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          // Dynamically Rendering ResCards
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
