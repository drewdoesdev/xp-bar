import styled from 'styled-components';
import {TableBody} from "./TableBody.sc";
import {TableHead} from "./TableHead.sc";
import {TableHeader} from "./TableHeader.sc";
import {TableRow} from "./TableRow.sc";
import {TableData} from "./TableData.sc";

export const Table = styled.table`
    width: 100%;
    max-width: ${props => props.maxWidth || "none"};
    border-collapse: collapse;
    margin: ${props => props.margin || "0"};
    margin-bottom: 20px;
    th, td {
        &::nth-child(1) { 
            text-align: left;
            width: 65%;
        }
    }
`;

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Data = TableData;