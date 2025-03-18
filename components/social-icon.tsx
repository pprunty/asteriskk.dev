import config from '@/app/config';

export type SocialPlatform =
  | 'github'
  | 'twitter'
  | 'linkedin'
  | 'reddit'
  | 'strava'
  | 'tiktok'
  | 'email'
  | 'instagram'
  | 'youtube';

export const urlMapping: Record<SocialPlatform, string> = {
  github: config.socials.github,
  twitter: config.socials.twitter,
  linkedin: config.socials.linkedin,
  reddit: config.socials.reddit,
  strava: config.socials.strava,
  email: `mailto:${config.socials.email}`,
  instagram: config.socials.instagram,
  tiktok: config.socials.tiktok,
  youtube: config.socials.youtube,
};

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

export function SocialIcon({ platform, className = '' }: SocialIconProps) {
  const iconProps = {
    className: `
      w-5 h-5
      sm:w-5 sm:h-5
      ${className}
      cursor-pointer
      text-muted-foreground
      hover:text-foreground
      transition-colors duration-200
    `,
    fill: 'currentColor',
    'aria-label': `${platform} profile`,
    role: 'link',
  };
  switch (platform) {
    case 'github':
      return (
        <svg
          {...iconProps}
          viewBox="-2 -2 24 24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="nonzero"
            stroke="none"
            strokeWidth={1}
            d="M8.28 20.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 0 0-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 0 0 1.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 0 0 3.29 4.02 4 4 0 0 1-1.85.08 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.43a11.67 11.67 0 0 0 6.28 1.83"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M20.3292112,2 C21.2519624,2 22,2.74752185 22,3.67078882 L22,20.3292112 C22,21.2519624 21.2524781,22 20.3292112,22 L3.67078882,22 C2.74803764,22 2,21.2524781 2,20.3292112 L2,3.67078882 C2,2.74803764 2.74752185,2 3.67078882,2 L20.3292112,2 Z M15.51875,9.5 C14.0993287,9.5 13.128125,10.127356 12.6956992,10.8562567 L12.625,10.9858333 L12.625,9.625 L9.91666667,9.625 L9.91666667,19.2083333 L12.8333333,19.2083333 L12.8333333,14.56625 C12.8333333,13.0104167 13.40625,12.0208333 14.7833333,12.0208333 C15.7330797,12.0208333 16.1315784,12.8606664 16.1644352,14.3580086 L16.1666667,14.56625 L16.1666667,19.2083333 L19.0833333,19.2083333 L19.0833333,13.9154167 C19.0833333,11.0575 18.3995833,9.5 15.51875,9.5 Z M7.83333333,9.5 L4.91666667,9.5 L4.91666667,19.0833333 L7.83333333,19.0833333 L7.83333333,9.5 Z M6.375,4.5 C5.33958333,4.5 4.5,5.33958333 4.5,6.375 C4.5,7.41041667 5.33958333,8.25 6.375,8.25 C7.41041667,8.25 8.25,7.41041667 8.25,6.375 C8.25,5.33958333 7.41041667,4.5 6.375,4.5 Z"
          />
        </svg>
      );
    case 'reddit':
      return (
        <svg {...iconProps} viewBox="0 -0.5 25 25">
          <path d="M25.418 12v.03c0 .543-.156 1.05-.425 1.479l.007-.012c-.274.442-.657.792-1.112 1.021l-.016.007c.108.403.17.865.17 1.343v.018-.001c-.01 1.558-.58 2.981-1.518 4.08l.007-.009c-1.088 1.296-2.473 2.308-4.052 2.936l-.069.024c-1.635.686-3.535 1.085-5.529 1.085-.051 0-.102 0-.153-.001h.008c-.043 0-.095.001-.146.001-1.991 0-3.888-.399-5.617-1.121l.096.036c-1.645-.654-3.027-1.665-4.101-2.944l-.013-.016c-.931-1.09-1.5-2.513-1.51-4.069v-.002c0-.001 0-.003 0-.005 0-.47.056-.928.161-1.366l-.008.04c-.483-.238-.878-.593-1.156-1.029l-.007-.011c-.276-.428-.44-.951-.44-1.512 0-.777.314-1.481.823-1.991.494-.512 1.186-.83 1.952-.83h.05-.003.039c.799 0 1.519.343 2.019.889l.002.002c2.047-1.41 4.572-2.265 7.296-2.298h.008l1.646-7.39c.03-.126.107-.231.211-.296l.002-.001c.074-.052.166-.083.265-.083.037 0 .073.004.107.012l-.003-.001 5.234 1.149c.174-.353.435-.639.757-.838l.009-.005c.319-.2.707-.319 1.123-.319.585 0 1.116.235 1.501.617.385.369.624.888.624 1.463v.036-.002.03c0 .578-.239 1.1-.624 1.472l-.001.001c-.384.386-.916.624-1.504.624-.584 0-1.113-.236-1.497-.617-.381-.371-.617-.888-.617-1.461 0-.013 0-.025 0-.038v.002l-4.738-1.05-1.475 6.694c2.747.02 5.293.865 7.407 2.3l-.047-.03c.513-.534 1.234-.865 2.031-.865.78 0 1.486.317 1.997.83.509.496.825 1.189.825 1.955v.039-.002zm-19.489 2.822v.032c0 .576.236 1.097.617 1.471.369.385.888.624 1.463.624h.036-.002c1.175-.002 2.126-.953 2.128-2.128 0-.01 0-.022 0-.034 0-.575-.239-1.094-.624-1.462l-.001-.001c-.374-.381-.895-.617-1.471-.617-.011 0-.023 0-.034 0h.002c-1.163.01-2.104.95-2.114 2.113v.001zm11.489 5.036c.096-.093.156-.224.156-.369s-.06-.275-.156-.369c-.087-.088-.207-.142-.341-.142-.005 0-.01 0-.014 0h.001c-.002 0-.005 0-.008 0-.14 0-.266.054-.361.142-.464.432-1.047.742-1.694.876l-.023.004c-.681.18-1.463.284-2.27.284s-1.588-.104-2.334-.298l.064.014c-.671-.137-1.255-.448-1.721-.882l.002.002c-.094-.088-.221-.142-.361-.142-.003 0-.006 0-.008 0-.003 0-.007 0-.011 0-.133 0-.254.054-.341.142-.098.086-.16.212-.16.352v.01.004c0 .146.061.278.16.372.462.435 1.025.767 1.65.957l.03.008c.501.186 1.087.332 1.695.414l.043.005q.666.064 1.29.064t1.29-.064c.65-.086 1.237-.233 1.796-.437l-.058.019c.656-.198 1.22-.529 1.685-.966l-.002.002zm-.042-2.908h.034c.575 0 1.094-.239 1.462-.624l.001-.001c.381-.374.617-.895.617-1.471 0-.011 0-.023 0-.034v.002c-.01-1.163-.95-2.104-2.113-2.114h-.001c-.01 0-.021 0-.032 0-.576 0-1.097.236-1.471.617-.385.369-.624.888-.624 1.463v.036-.002c.002 1.175.953 2.126 2.128 2.128z" />
        </svg>
      );
    case 'strava':
      return (
        <svg {...iconProps} viewBox="0 0 32 32">
          <path d="M 14.179688 2 L 5.9003906 18 L 10.779297 18 L 14.179688 11.619141 L 17.560547 18 L 22.400391 18 L 14.179688 2 z M 22.400391 18 L 20 22.789062 L 17.560547 18 L 13.859375 18 L 20 30 L 26.099609 18 L 22.400391 18 z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg
          {...iconProps}
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
        </svg>
      );
    case 'email':
      return (
        <svg
          {...iconProps}
          viewBox="0 0 493.497 493.497"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M444.556,85.218H48.942C21.954,85.218,0,107.171,0,134.16v225.177c0,26.988,21.954,48.942,48.942,48.942h395.613  c26.988,0,48.941-21.954,48.941-48.942V134.16C493.497,107.171,471.544,85.218,444.556,85.218z M460.87,134.16v225.177  c0,2.574-0.725,4.924-1.793,7.09L343.74,251.081l117.097-117.097C460.837,134.049,460.87,134.096,460.87,134.16z M32.628,359.336  V134.16c0-0.064,0.033-0.11,0.033-0.175l117.097,117.097L34.413,366.426C33.353,364.26,32.628,361.911,32.628,359.336z   M251.784,296.902c-2.692,2.691-7.378,2.691-10.07,0L62.667,117.846h368.172L251.784,296.902z M172.827,274.152l45.818,45.819  c7.512,7.511,17.493,11.645,28.104,11.645c10.61,0,20.592-4.134,28.104-11.645l45.82-45.819l101.49,101.499H71.327L172.827,274.152z  "></path>
        </svg>
      );
    case 'instagram':
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8,2 L16,2 C19.3137085,2 22,4.6862915 22,8 L22,16 C22,19.3137085 19.3137085,22 16,22 L8,22 C4.6862915,22 2,19.3137085 2,16 L2,8 C2,4.6862915 4.6862915,2 8,2 Z M8,4 C5.790861,4 4,5.790861 4,8 L4,16 C4,18.209139 5.790861,20 8,20 L16,20 C18.209139,20 20,18.209139 20,16 L20,8 C20,5.790861 18.209139,4 16,4 L8,4 Z M12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 C17.5522847,6 18,6.44771525 18,7 C18,7.55228475 17.5522847,8 17,8 Z"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
        </svg>
      );
    default:
      return null;
  }
}
