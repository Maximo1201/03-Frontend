import {
  documentGetInitialProps,
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";

//Create custom theme and get font
import theme from "@/theme";
import { DocumentProps } from "postcss";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="es">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="emotion-insertion-point" content="mui-inject" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finallProps = await documentGetInitialProps(ctx);
  return finallProps;
};
