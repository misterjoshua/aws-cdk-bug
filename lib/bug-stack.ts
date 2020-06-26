import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import * as nodejs from '@aws-cdk/aws-lambda-nodejs';

export class BugStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new nodejs.NodejsFunction(this, 'handler');

    new CfnOutput(this, 'output', {
      value: fn.functionName,
    });

    // The code that defines your stack goes here
  }
}
