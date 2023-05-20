import { SVGProps } from "@/types/global";
import clsx from "clsx";
import { FC } from "react";

export const LongCross: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="97" height="114" viewBox="0 0 97 114" xmlns="http://www.w3.org/2000/svg">
      <path d="M53.9847 100.972H41.8369V113.329H53.9847V100.972Z"/>
      <path d="M53.9847 0H41.8369V12.3575H53.9847V0Z"/>
      <path d="M80.9369 50.6875H68.7891V63.045H80.9369V50.6875Z"/>
      <path d="M12.1478 50.6875H0V63.045H12.1478V50.6875Z"/>
      <path d="M96.224 50.6875H84.0762V63.045H96.224V50.6875Z"/>
      <path d="M27.434 50.6875H15.2861V63.045H27.434V50.6875Z"/>
      <path d="M54.3075 18.1035H41.8369V95.3407H54.3075V18.1035Z"/>
      <path d="M66.0371 63.2357V51.0342H30.5732V63.2357H66.0371Z"/>
    </svg>

  )
}
export const Cross: FC<SVGProps> = ({
  sizeClass = "h-3 w-3",
  colorClass = "fill-current stroke-none",
  className
}) => { 
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.711 0H19.7217V61.1422H40.711V0Z" />
      <path d="M61.0742 41.6993V20.6865L0.00019455 20.6865V41.6993H61.0742Z" />
    </svg>

  )
}

export const HollowCross: FC<SVGProps> = ({
  sizeClass = "h-3 w-3",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="62" height="60" viewBox="0 0 62 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5343 0H19.6865V20.8711H40.5343V0Z" />
      <path d="M61.0812 19.4209H40.2334V40.292H61.0812V19.4209Z" />
      <path d="M20.8478 19.4209H0V40.292H20.8478V19.4209Z" />
      <path d="M40.5343 39.1289H19.6865V60H40.5343V39.1289Z" />
    </svg>


  )
}

export const Grid: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="196" height="92" viewBox="0 0 196 92" xmlns="http://www.w3.org/2000/svg">
      <path d="M124.736 0H106.816V18.2294H124.736V0Z" />
      <path d="M89.1309 0H71.2109V18.2294H89.1309V0Z" />
      <path d="M53.5255 0H35.6055V18.2294H53.5255V0Z" />
      <path d="M17.92 0H0V18.2294H17.92V0Z" />
      <path d="M142.539 18.396H124.619V36.6254H142.539V18.396Z" />
      <path d="M106.934 18.396H89.0137V36.6254H106.934V18.396Z" />
      <path d="M71.3282 18.396H53.4082V36.6254H71.3282V18.396Z" />
      <path d="M35.7227 18.396H17.8027V36.6254H35.7227V18.396Z" />
      <path d="M160.342 36.792H142.422V55.0214H160.342V36.792Z" />
      <path d="M124.736 36.792H106.816V55.0214H124.736V36.792Z" />
      <path d="M89.1309 36.792H71.2109V55.0214H89.1309V36.792Z" />
      <path d="M53.5255 36.792H35.6055V55.0214H53.5255V36.792Z" />
      <path d="M178.145 55.1885H160.225V73.4178H178.145V55.1885Z" />
      <path d="M142.539 55.1885H124.619V73.4178H142.539V55.1885Z" />
      <path d="M106.934 55.1885H89.0137V73.4178H106.934V55.1885Z" />
      <path d="M71.3282 55.1885H53.4082V73.4178H71.3282V55.1885Z" />
      <path d="M195.947 73.5845H178.027V91.8138H195.947V73.5845Z" />
      <path d="M160.342 73.5845H142.422V91.8138H160.342V73.5845Z" />
      <path d="M124.736 73.5845H106.816V91.8138H124.736V73.5845Z" />
      <path d="M89.1309 73.5845H71.2109V91.8138H89.1309V73.5845Z" />
    </svg>
  )
}

export const Block: FC<SVGProps> = ({
  sizeClass = "h-1 w-1",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="43" height="44" viewBox="0 0 43 44" xmlns="http://www.w3.org/2000/svg">
      <path d="M43 0H0V44H43V0Z" />
    </svg>

  )
}