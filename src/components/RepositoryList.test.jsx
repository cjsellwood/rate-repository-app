import React from "react";
import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "./RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const repositoryItems = getAllByTestId("repository-item");
      const bottomBars = getAllByTestId("bottom-bar");

      expect(repositoryItems).toHaveLength(2);

      expect(repositoryItems[0]).toHaveTextContent(
        repositories.edges[0].node.fullName
      );
      expect(repositoryItems[0]).toHaveTextContent(
        repositories.edges[0].node.description
      );
      expect(repositoryItems[0]).toHaveTextContent(
        repositories.edges[0].node.language
      );
      expect(bottomBars[0]).toHaveTextContent("1.6k");
      expect(bottomBars[0]).toHaveTextContent("21.9k");
      expect(bottomBars[0]).toHaveTextContent("88");
      expect(bottomBars[0]).toHaveTextContent("3");

      expect(repositoryItems[1]).toHaveTextContent(
        repositories.edges[1].node.fullName
      );
      expect(repositoryItems[1]).toHaveTextContent(
        repositories.edges[1].node.description
      );
      expect(repositoryItems[1]).toHaveTextContent(
        repositories.edges[1].node.language
      );
      expect(bottomBars[1]).toHaveTextContent("69");
      expect(bottomBars[1]).toHaveTextContent("1.8k");
      expect(bottomBars[1]).toHaveTextContent("72");
      expect(bottomBars[1]).toHaveTextContent("3");
    });
  });
});
