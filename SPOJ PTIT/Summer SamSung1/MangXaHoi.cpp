#include<bits/stdc++.h>
#include<iostream>
#include<math.h>
using namespace std;

main(){
	int t,n,m ,x, y;
	cin>>t;
	while(t--){
		cin>>n>>m;
		vector<int> a[n+1];
		for(int i = 1; i <= n; i++){
			a[i].push_back(i);
		}
		
		for(int i = 1; i <=m ;i++){
			cin>> x>>y;
			a[x].push_back(y);
			a[y].push_back(x);
		}
		int kt = 1;
		for(int i = 1; i <= n; i++){
			for(int j = 0; j< a[i].size(); j++){
				if(a[i].size() != a[a[i][j]].size()){
					kt = 0;
					break;
				}
			}
		if(kt == 0)		break;
		}
		if(kt == 1)		cout<<"YES"<<endl;
		else{
			cout<<"NO"<<endl;
		}
	
	}
	return 0;
}

