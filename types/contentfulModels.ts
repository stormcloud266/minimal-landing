import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeCase_studyFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    featured_study?: Contentful.EntryFields.Boolean;
    order?: Contentful.EntryFields.Integer;
    last_updated: Contentful.EntryFields.Date;
    live_site_url?: Contentful.EntryFields.Symbol;
    github_link?: Contentful.EntryFields.Symbol;
    display_tags?: Contentful.EntryFields.Object;
    filter_tags?: Contentful.EntryFields.Object;
    highlights: Contentful.EntryFields.Object;
    intro_text: Contentful.EntryFields.Text;
    hero_image: Contentful.Asset;
    portfolio_image: Contentful.Asset;
    motivation_header: Contentful.EntryFields.Symbol;
    motivation_body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    solution_header: Contentful.EntryFields.Symbol;
    solution_body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    multi_device_image: Contentful.Asset;
    process_body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    process_list?: Contentful.EntryFields.Object;
    challenges_list?: Contentful.EntryFields.Object;
    screenshot_gallery?: Contentful.Asset[];
}

export type TypeCase_study = Contentful.Entry<TypeCase_studyFields>;

