#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BugStack } from '../lib/bug-stack';

const app = new cdk.App();
new BugStack(app, 'BugStack');
