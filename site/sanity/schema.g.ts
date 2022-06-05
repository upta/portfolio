import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Portfolio
 *
 *
 */
export interface Portfolio extends SanityDocument {
  _type: "portfolio";

  /**
   * Full Name — `string`
   *
   *
   */
  fullName?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Location — `string`
   *
   *
   */
  location?: string;

  /**
   * Photo — `image`
   *
   *
   */
  photo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Background Image Url — `url`
   *
   *
   */
  background?: string;

  /**
   * Header — `section`
   *
   *
   */
  header?: Section;

  /**
   * Bio — `section`
   *
   *
   */
  bio?: Section;

  /**
   * Contact Info — `contact`
   *
   *
   */
  contact?: Contact;

  /**
   * Experience — `array`
   *
   *
   */
  experience?: Array<SanityKeyed<Experience>>;

  /**
   * Tech — `tech`
   *
   *
   */
  tech?: Tech;

  /**
   * Projects — `array`
   *
   *
   */
  projects?: Array<SanityKeyed<Project>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Contact = {
  _type: "contact";
  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Website — `string`
   *
   *
   */
  website?: string;
};

export type Experience = {
  _type: "experience";
  /**
   * Type — `string`
   *
   *
   */
  type?: "Work" | "Education";

  /**
   * Where — `string`
   *
   *
   */
  where?: string;

  /**
   * When — `string`
   *
   *
   */
  when?: string;

  /**
   * What — `section`
   *
   *
   */
  what?: Section;
};

export type Project = {
  _type: "project";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Urls — `array`
   *
   *
   */
  urls?: Array<SanityKeyed<string>>;

  /**
   * Thumbnail — `image`
   *
   *
   */
  thumbnail?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;

  /**
   * Technology — `blockContent`
   *
   *
   */
  technology?: BlockContent;

  /**
   * Lessons Learned — `blockContent`
   *
   *
   */
  lessons?: BlockContent;
};

export type Section = {
  _type: "section";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
};

export type Tech = {
  _type: "tech";
  /**
   * Languages — `array`
   *
   *
   */
  languages?: Array<SanityKeyed<string>>;

  /**
   * Frameworks — `array`
   *
   *
   */
  frameworks?: Array<SanityKeyed<string>>;

  /**
   * Tools — `array`
   *
   *
   */
  tools?: Array<SanityKeyed<string>>;
};

export type Documents = Portfolio;
