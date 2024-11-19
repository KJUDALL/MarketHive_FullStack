//  Handles user-related logic.
import { request, response } from "express";
import { User } from '../models';
import jwt from 'jsonwebtoken';

// Login 