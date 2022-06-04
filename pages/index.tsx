import React from "react";
import {
  Button,
  Card,
  CardContent,
  Icon,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import AlgorithmsList from "components/algorithmsList";
import LanguagesList from "components/languagesList";
import { getAlgorithm } from "lib/algorithms";
import Section from "components/section";
import CategoriesList from "components/categoriesList";
import { Language, Repositories } from "lib/repositories";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GithubOriginalIcon from "react-devicons/github/original";
import GitterPlainIcon from "react-devicons/gitter/plain";
import WeblatePlainIcon from "react-devicons/weblate/plain";
import {
  Search,
  Sort,
  OfflineBolt,
  EnhancedEncryption,
  Storage,
  Functions,
  InsertPhoto,
} from "@material-ui/icons";
import Translation from "components/translation";
import useTranslation from "hooks/translation";
import Head from "components/head";
import getRepositoryStars from "lib/stars";
import { Algorithm } from "lib/models";
import HomeLayout from "layouts/home";
import classes from "./index.module.css";

export default function Home({
  topAlgorithms,
  featuredAlgorithms,
  stars,
}: {
  topAlgorithms: Algorithm[];
  featuredAlgorithms: Algorithm[];
  stars: { [key: string]: number };
}) {
  const t = useTranslation();

  return (
    <>
      <Head description={t("indexMetaDescription")} />
      <Section title={t("topAlgorithms")}>
        <AlgorithmsList noCategories algorithms={topAlgorithms} />
      </Section>
      <div>
        <Section>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.oneCols}>
                <div>
                  <Typography id="about" variant="h5" className={classes.title}>
                    {t("algorithmExplanationTitle")}
                  </Typography>
                  <Typography>{t("algorithmExplanation")}</Typography>
                </div>
                <div />
                <br />
                <br />
                <br />
                <br />
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
      <Section title={t("featuredAlgorithms")}>
        <AlgorithmsList noCategories algorithms={featuredAlgorithms} />
      </Section>
      <Section title={t("topCategories")}>
        <CategoriesList
          categories={[
            {
              name: t("categories:sorts"),
              icon: <Sort />,
              href: "/category/sorts",
            },
            {
              name: t("categories:searches"),
              icon: <Search />,
              href: "/category/searches",
            },
            {
              name: t("categories:dynamicprogramming"),
              icon: <OfflineBolt />,
              href: "/category/dynamicprogramming",
            },
            {
              name: t("categories:ciphers"),
              icon: <EnhancedEncryption />,
              href: "/category/ciphers",
            },
            {
              name: t("categories:datastructures"),
              icon: <Storage />,
              href: "/category/datastructures",
            },
            {
              name: t("categories:math"),
              icon: <Functions />,
              href: "/category/math",
            },
            {
              name: t("categories:digitalimageprocessing"),
              icon: <InsertPhoto />,
              href: "/category/digitalimageprocessing",
            },
          ]}
        />
      </Section>

     
    </>
  );
}

Home.Layout = HomeLayout;

export async function getStaticProps({ locale }) {
  const stars = await getRepositoryStars();
  return {
    props: {
      topAlgorithms: [
        await getAlgorithm("binary-search", true),
        await getAlgorithm("quick-sort", true),
        await getAlgorithm("fibonacci-numbers", true),
      ],
      featuredAlgorithms: [
        await getAlgorithm("coin-change", true),
        await getAlgorithm("logistic-regression", true),
        await getAlgorithm("caesar-cipher", true),
        await getAlgorithm("a-simple-gan", true),
        await getAlgorithm("bellman-ford", true),
        await getAlgorithm("bogo-sort", true),
      ],
      ...(await serverSideTranslations(locale, ["common", "categories"])),
      stars,
    },
  };
}
