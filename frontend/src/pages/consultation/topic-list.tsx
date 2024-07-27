import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Topic } from "./types";

interface TopicListProps {
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
}
export const TopicList: React.FC<TopicListProps> = ({
  topics,
  onTopicClick,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Topic</TableCell>
          <TableCell>Started by</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {topics.map((topic, index) => (
          <TableRow key={index}>
            <TableCell
              onClick={() => onTopicClick(topic)}
              style={{ cursor: "pointer" }}
            >
              <Typography>{topic.subject}</Typography>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center">
                <Avatar src={topic.imageURL} alt="User Avatar" sx={{ mr: 1 }} />
                {topic.startedBy}
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
