#include<bits/stdc++.h>

using namespace std;

main(){
	int n;
	long long S;	
	cin>>n>>S;
	long long t[n+1];
	for(int i = 1; i <= n; i++){
		cin>>t[i];
	}
	sort(t+1,t+n+1);
	int dem = 0;
	int i = n;
	while(i > 0){
		if( S >= t[i]){
			int l = S/ t[i];
			dem += S/t[i];
			S = S - l*t[i];
			if(S == 0 ){
				break;
			}
		}
		i--;
	}
	cout<<dem<<endl;
	return 0;
}

