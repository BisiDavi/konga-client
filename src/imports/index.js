export { default as Navbar } from "../components/navigation/Navbar";
export { default as LazyLoadImage } from "../components/LazyImages/LazyLoadImage";
export { default as Slider } from "../components/slider/slider";

// card
export { default as Card } from "../components/card/card";
export { default as CardTags } from "../components/card/CardTags";
export { default as GroupCard } from "../components/card/groupCard";
export { default as ProductCard } from "../components/card/ProductCard";
export { default as HoverCard } from "../components/card/hovercard";
export { default as ShowcaseCard } from "../components/card/showcaseCard";
export { default as PromoBanner } from "../components/card/PromoBanner";

export { default as LatestDeals } from "../components/group/deals/latestdeals";
// export { default as LatestDeals } from "../components/deals/latestdeals";
export { default as RecommendedProducts } from "../components/group/recommended/recommendedProducts";
export { default as DealAdvertGif } from "../components/slider/Gif/DealAdvertGif";

// layout
export { default as Header } from "../layout/header/header";
export { default as KongaCategory } from "../layout/header/KongaCategory";
export { default as Navigation } from "../layout/header/Navigation";
export { default as Footer } from "../layout/footer/footer";
export { default as Branddetails } from "../layout/footer/branddetails/branddetails";
export { default as Brandlogo } from "../layout/footer/branddetails/brandlogos";

export { default as Layout } from "../layout/layout";

// pages
export { default as LandingPage } from "../pages/LandingPage/LandingPage";

export { default as AllCategories } from "../components/menu/AllCategories";

export { default as Menu } from "../components/menu/menu";
export { default as MobileMenu } from "../components/menu/menu";

// auth
export { default as UserRegister } from "../auth/user/userRegister";
export { default as ModalLogin } from "../auth/user/modalLogin";
export { default as UserLogin } from "../auth/user/Login";
export { default as Signin } from "../auth/admin/signin";
export { default as Login } from "../auth/admin/login";

/* routes */
export { default as AppRoutes } from "../routes";

// nav
export { default as BabyToys } from "../nav/babyToys";
export { default as Computers } from "../nav/Computers";
export { default as Electronics } from "../nav/electronics";
export { default as Fashion } from "../nav/fashion";
export { default as HomeKitchen } from "../nav/homeKitchen";
export { default as Phones } from "../nav/phones";
export { default as WineOtherCategories } from "../nav/wineOtherCategories";

// admin
export { default as MainDashboard } from "../dashboard/components/dashboard";
export { default as ProductTable } from "../dashboard/pages/ProductTable";
export { default as DashboardHome } from "../dashboard/pages/index";

// list
export { computer_accessories } from "../components/menu/list/computerList";
export { phones_tablet } from "../components/menu/list/phoneList";
export { electronic } from "../components/menu/list/electronicList";
export { fashion } from "../components/menu/list/fashionList";
export { Home_kitchen } from "../components/menu/list/kitchenList";
export { babytoys } from "../components/menu/list/toyList";
export {
  wine,
  Beauty_Health_Personal_Care,
  Outdoor_Indoor_Games,
  Automotive
} from "../components/menu/list/wineList";

// utils

export { default as TabPanel } from "../utils/tabs/Tabs";
export { default as Modal } from "../utils/modal/modal";
export { default as Popularcategory } from "../utils/popularCategories/popularcategory";
export { default as AdsBanner } from "../utils/banner/banner1";
export { default as ProductBanner } from "../utils/banner/banner2";
export { default as CategoryBanner } from "../utils/banner/categoryBanner";
export { default as BestSellingProducts } from "../utils/showcaseProduct/bestSelling/bestSelling";
export { default as SponsoredProducts } from "../utils/showcaseProduct/sponsoredProduct/sponsoredProduct";

/* reducers */
export { default as CounterReducer } from "../store/reducers/counterReducer";
export { default as ProductReducer } from "../store/reducers/productReducer";

/* svg img */
export { default as shopIcon } from "../assets/shop.svg";
export { default as shirtIcon } from "../assets/shirt.svg";
export { default as phoneIcon } from "../assets/phone.svg";
export { default as moreIcon } from "../assets/more.svg";
export { default as desktopIcon } from "../assets/desktop.svg";
export { default as pricetagIcon } from "../assets/pricetag.svg";

/* form */
export { Inputform } from "../components/forms/forms";
