'use client'
import { useState, ReactNode } from "react";
import { MdPeople } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { HiViewGrid, HiCurrencyDollar } from "react-icons/hi";

// ====================================================================================================
// Type Definitions
interface StatusColorMap {
  [key: string]: string;
}

interface RoleManager {
  [key: string]: {
    icon: any;
    role: string;
    href: string;
    iconhref: ReactNode;
  };
}

interface TruncatedTextProps {
  text: string;
  length?: number;
}

interface InvitedUserRole {
  role: {
    role: string;
  };
  corp_id?: {
    corporate_name: string;
  };
}

interface StorageFacility {
  availability_status?: string;
  country?: {
    name: string;
  };
  createdAt?: string;
}

interface FormatCurrencyOptions {
  currency?: string;
  locale?: string;
  showDecimal?: boolean;
}

interface Product {
  product_type?: {
    name: string;
  };
  product_category?: {
    name: string;
  };
  product_name?: string;
}

interface Store {
  store_name?: string;
}

// ====================================================================================================
// Utility Functions

/**
 * Truncate text with ellipsis
 */
export const truncate = (str: string = "", length: number = 20, ending: string = "..."): string =>
  str.length > length ? `${str.substring(0, length - ending.length)}${ending}` : str;

/**
 * Capitalize each word in a sentence
 */
export const capitalizeWords = (sentence: string): string => {
  if (!sentence) return "";
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word?.[0]?.toUpperCase() + word?.slice(1))
    .join(" ");
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Status color mapping
 */
export const statusColorMatch: StatusColorMap = {
  approved: "#1B7B44",
  pending: "#F68B1E",
  rejected: "#B81A0A",
  suspended: "#EF0C1A",
  delivered: "#0099FF",
  received: "#55B802",
  canceled: "#EF0C1A",
  returned: "#9E3F00",
  buyers: "#445268",
  "in progress": "#BFB800",
  shipped: "#7549FF",
  "new orders": "#1B7B44",
};

/**
 * Role management configuration
 */
export const roleManager: RoleManager = {
  admin: {
    icon: HiViewGrid,
    role: "Admin",
    href: "/admin/dashboard",
    iconhref: <HiViewGrid />,
  },
  seller: {
    icon: HiCurrencyDollar,
    role: "Seller",
    href: "/seller/dashboard",
    iconhref: <HiCurrencyDollar />,
  },
  corporate: {
    icon: FaUserTie,
    role: "Corporate",
    href: "/corporate/dashboard",
    iconhref: <FaUserTie />,
  },
  facility: {
    icon: BsFillBuildingFill,
    role: "Facility",
    href: "/storage/dashboard",
    iconhref: <BsFillBuildingFill />,
  },
  agent: {
    role: "Agent",
    icon: GrUserWorker,
    href: "/agent/dashboard",
    iconhref: <GrUserWorker />,
  },
  user: {
    role: "User",
    icon: BiSolidUser,
    href: "/",
    iconhref: <BiSolidUser />,
  },
};

/**
 * Email validation
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isValidEmail = (email: string): boolean => emailRegex.test(email);

/**
 * Format amount in Naira
 */
export const formatNaira = (amount: number): string => {
  if (isNaN(amount)) return "₦0";
  if (Math.abs(amount) >= 1000000) {
    return `₦${(amount / 1000000).toFixed(2)} Million`;
  }
  return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

/**
 * Add commas to number
 */
export const addCommas = (n: number): string => {
  if (isNaN(n)) return "0";
  if (n >= 1000000) return `${(n / 1000000).toFixed(2)} Million`;
  return n?.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Get highest price from array of objects
 */
export function getHighestPrice(objects: { price: number }[]): number {
  return objects?.reduce((max, obj) => (obj.price > max ? obj.price : max), 0);
}

/**
 * Get lowest price from array of objects
 */
export function getLowestPrice(objects: { price: number }[]): number {
  return objects?.reduce((min, obj) => (obj.price < min ? obj.price : min), Infinity);
}

/**
 * Format date and time
 */
export const getDateAndTime = (date: string | Date, db: boolean = false): string | Date => {
  const currentDate = new Date(date);
  const today = new Date();

  if (db) {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      today.getHours(),
      today.getMinutes(),
      today.getSeconds(),
      0
    ).toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  }

  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    today.getHours(),
    today.getMinutes(),
    today.getSeconds(),
    0
  );
};

/**
 * Convert ISO date to formatted string
 */
export const convertISODateToDateTimeString = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
};

/**
 * Format date as "Month Year"
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date);
};

/**
 * Generate random HEX color
 */
export const generateHEXColor = (): string =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

/**
 * Generate random RGBA color
 */
export const generateRGBAColor = (): string =>
  `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.3)`;

/**
 * Number regex validation
 */
export const numberRegex = /^\+?\d+$/;

/**
 * Calculate percentage discount
 */
export function calculatePercentageOff(oldPrice: number, newPrice: number): number {
  if (oldPrice <= 0 || newPrice <= 0 || newPrice >= oldPrice) return 0;
  const percentageOff = ((oldPrice - newPrice) / oldPrice) * 100;
  return Math.round(percentageOff * 100) / 100;
}

/**
 * Truncated text component with expand/collapse
 */
export const TruncatedText = ({ text, length = 100 }: TruncatedTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text?.split(" ") || [];
  const maxWords = length;

  return (
    <div className=" ">
      {!isExpanded ? (
        <span className={`text-justify`}>
          {words?.slice(0, maxWords)?.join(" ")}
          {words?.length > maxWords && !isExpanded && "... "}
        </span>
      ) : (
        <span className={`text-justify`}>{text}</span>
      )}

      {words.length > maxWords && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:underline focus:outline-none text-sm ml-2 font-bold text-[#F68B1E] cursor-pointer"
        >
          {isExpanded ? "Read Less " : "Keep reading "}
        </button>
      )}
    </div>
  );
};

/**
 * Get previous path from browser history
 */
export const GetPreviousPathname = (): string => {
  const prevPath = window.history.state?.tree?.[1]?.children?.[1]?.children?.[0] || "";
  sessionStorage.setItem("prevPath", prevPath);
  return prevPath;
};

/**
 * Navigate back with fallback
 */
export const GoBack = (): void => {
  GetPreviousPathname();
  const path = sessionStorage.getItem("prevPath");
  if (path && ["register"].includes(path)) {
    window.history.pushState({}, "", "/");
  } else {
    window.history.back();
  }
};

/**
 * Manage user roles for invited users
 */
export function invitedUserRoleManager(userRoles: InvitedUserRole[]) {
  const roleManager: Record<string, any> = {};
  const getIconForRole: Record<string, any> = {
    agent: MdPeople,
    farmer: GiFarmer,
    "super-admin": FaUserTie,
    "facility-admin": GrUserWorker,
  };

  userRoles?.forEach((userRole) => {
    const { role, corp_id } = userRole;
    const roleName = role?.role;
    const corporateName = corp_id?.corporate_name;

    const icon = getIconForRole[roleName?.toLowerCase()] || FaUserTie;
    const href = `/corporate/${roleName?.toLowerCase()}` || "/";

    if (roleName) {
      roleManager[roleName] = {
        icon,
        role: corporateName,
        roleName,
        href,
        corp_id,
      };
    }
  });

  return roleManager;
}

/**
 * Filter storage facilities by category, country, and date
 */
export function filterStorageByCategoryAndCountry(
  facilities: StorageFacility[],
  category?: string,
  country?: string,
  date?: string | number
): StorageFacility[] {
  return facilities?.filter((item) => {
    const isFacCatMatch =
      !category ||
      category.toLowerCase() === "all" ||
      item.availability_status?.toLowerCase() === category.toLowerCase();

    const isCountryMatch =
      !country ||
      country.toLowerCase() === "all" ||
      item.country?.name?.toLowerCase() === country.toLowerCase();

    const isDateMatch =
      !date ||
      date === "years" ||
      new Date(item.createdAt || "").getFullYear() === Number(date);

    return isFacCatMatch && isCountryMatch && isDateMatch;
  }) || [];
}

/**
 * Update object with new values
 */
export function updateObject<T extends Record<string, any>>(oldObj: T, newObj: Partial<T>): T {
  return { ...oldObj, ...newObj };
}

/**
 * Transform array for select components
 */
export const transformObjectForSelect = <T extends { name: string; _id?: string; id?: string }>(
  data: T[]
): Array<{ label: string; value: string }> => {
  if (!data || data.length === 0) return [];
  return data.map(({ name, _id, id, ...rest }) => ({
    label: name,
    value: _id || id || "",
    ...rest,
  }));
};


/**
 * Format number as currency
 */
export function formatAsCurrency(
  number: number,
  { currency = "NGN", locale = "en-NG", showDecimal = false }: FormatCurrencyOptions = {}
): string {
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    minimumFractionDigits: showDecimal ? 2 : 0,
  };

  if (isNaN(number)) {
    return new Intl.NumberFormat(locale, formatOptions).format(0);
  }

  return new Intl.NumberFormat(locale, formatOptions).format(number);
}

/**
 * Calculate discounted price
 */
export function calculateDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) return 0;
  return originalPrice - (originalPrice * discountPercentage) / 100;
}

/**
 * Duplicate array items (for testing)
 */
export function duplicateArrayItems<T>(array: T[], times: number): T[] {
  if (!Array.isArray(array) || typeof times !== "number" || times <= 0) return [];
  return Array(times).fill(array).flat();
}

/**
 * Calculate total price from array
 */
export function calculateTotalPrice(array: Array<{ product?: { product_price: string | number } }>): number {
  if (!Array.isArray(array)) return 0;
  return array.reduce((total, item) => {
    const price = parseFloat(String(item.product?.product_price || 0));
    return total + (isNaN(price) ? 0 : price);
  }, 0);
}

/**
 * Get file extension from filename
 */
export function getFileExtension(fileName: string): string {
  if (!fileName) return "";
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex !== -1 ? fileName.slice(dotIndex + 1) : "";
}

/**
 * Convert object to FormData
 */
export function convertToFormData(data: Record<string, any>): FormData {
  const formData = new FormData();
  for (const key in data) {
    const value = data[key];
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((file) => formData.append(key, file));
      } else if (typeof value === "object" && value !== null && "value" in value) {
        formData.append(key, value.value);
      } else {
        formData.append(key, value);
      }
    }
  }
  return formData;
}

/**
 * Filter products by type and category
 */
export function filterProducts(
  products: Product[],
  filters: { type?: string; category?: string }
): Product[] {
  return products?.filter((product) => {
    if (filters.type && filters.category) {
      return (
        product.product_type?.name?.toLowerCase() === filters.type?.toLowerCase() &&
        product.product_category?.name?.toLowerCase() === filters.category?.toLowerCase()
      );
    } else if (filters.type) {
      return product.product_type?.name?.toLowerCase() === filters.type?.toLowerCase();
    } else if (filters.category) {
      return product.product_category?.name?.toLowerCase() === filters.category?.toLowerCase();
    }
    return true;
  }) || [];
}

/**
 * Filter market products by name
 */
export const filterMarketProducts = (products: Product[], filterParam: string): Product[] => {
  if (!filterParam?.trim()) return products || [];
  const filterText = filterParam.toLowerCase();
  return products?.filter((p) => p?.product_name?.toLowerCase().includes(filterText)) || [];
};

/**
 * Filter stores by name
 */
export const filterStores = (stores: Store[], filterParam: string): Store[] => {
  if (!filterParam?.trim()) return stores || [];
  const filterText = filterParam.toLowerCase();
  return stores?.filter((s) => s?.store_name?.toLowerCase().includes(filterText)) || [];
};